import { useEffect, useRef } from 'react'

// Next-level universe: big orbit systems + starfield + meteors + mouse parallax
const UniverseBackground = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let stars = []
    let orbits = []
    let meteor = null
    let nextMeteorAt = 0
    let rafId = 0
    let running = true
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const rand = (min, max) => Math.random() * (max - min) + min

    const buildScene = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = Math.max(1, rect.width)
      h = Math.max(1, rect.height)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Stars: density-based, capped for mobile perf
      const count = Math.min(260, Math.floor((w * h) / 5500))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(0.4, 1.8),
        baseAlpha: rand(0.25, 0.95),
        twinkleSpeed: rand(0.5, 2.4),
        phase: Math.random() * Math.PI * 2,
        depth: rand(0.2, 1), // for parallax
        tint: Math.random() < 0.7 ? '255,255,255' : Math.random() < 0.5 ? '147,197,253' : Math.random() < 0.7 ? '253,224,71' : '226,232,240',
      }))

      // REALISTIC — white sun + blue / green / yellow planets jaise real orbit
      const isMobile = w < 768
      const s = isMobile ? 0.55 : 1 // shrink on mobile so it fits
      const tilt = -0.35

      orbits = [
        // Left-top — medium galaxy
        {
          cx: w * 0.1, cy: h * 0.3, tilt, coreSize: 3, coreColor: '255,255,255',
          rings: [
            { rx: 90 * s, ry: 34 * s, speed: 0.28, size: 2.6, color: '96,165,250', angle: rand(0, 6.28), alpha: 0.22 },
            { rx: 150 * s, ry: 58 * s, speed: -0.18, size: 2, color: '255,255,255', angle: rand(0, 6.28), alpha: 0.18 },
            { rx: 215 * s, ry: 82 * s, speed: 0.1, size: 1.8, color: '250,204,21', angle: rand(0, 6.28), alpha: 0.12 },
          ],
        },
        // Right-bottom — HERO big galaxy (sabse bada)
        {
          cx: w * 0.89, cy: h * 0.74, tilt, coreSize: 4, coreColor: '255,255,255',
          rings: [
            { rx: 70 * s, ry: 26 * s, speed: 0.4, size: 1.8, color: '52,211,153', angle: rand(0, 6.28), alpha: 0.22 },
            { rx: 130 * s, ry: 50 * s, speed: 0.22, size: 2.6, color: '96,165,250', angle: rand(0, 6.28), alpha: 0.2 },
            { rx: 200 * s, ry: 78 * s, speed: -0.14, size: 2.2, color: '255,255,255', angle: rand(0, 6.28), alpha: 0.16 },
            { rx: 280 * s, ry: 110 * s, speed: 0.08, size: 2.8, color: '250,204,21', angle: rand(0, 6.28), alpha: 0.12 },
          ],
        },
        // Center — giant faint orbit behind hero text (depth layer)
        {
          cx: w * 0.5, cy: h * 0.48, tilt: -0.18, coreSize: 0, coreColor: '255,255,255', faint: true,
          rings: [
            { rx: 320 * s, ry: 110 * s, speed: 0.06, size: 3, color: '147,197,253', angle: rand(0, 6.28), alpha: 0.1 },
            { rx: 430 * s, ry: 150 * s, speed: -0.045, size: 2.4, color: '255,255,255', angle: rand(0, 6.28), alpha: 0.08 },
            { rx: 540 * s, ry: 190 * s, speed: 0.03, size: 2, color: '250,204,21', angle: rand(0, 6.28), alpha: 0.06 },
          ],
        },
      ]
    }

    const spawnMeteor = (now) => {
      const fromLeft = Math.random() < 0.5
      meteor = {
        x: fromLeft ? rand(0, w * 0.4) : rand(w * 0.6, w),
        y: rand(0, h * 0.3),
        vx: (fromLeft ? 1 : -1) * rand(4, 7),
        vy: rand(2, 3.5),
        life: 1,
      }
      nextMeteorAt = now + rand(4000, 9000)
    }

    const draw = (now) => {
      const t = now / 1000
      ctx.clearRect(0, 0, w, h)
      const mx = (mouseRef.current.x - 0.5) * 20
      const my = (mouseRef.current.y - 0.5) * 20

      // Richer nebula — black + white theme, subtle blue depth
      const nebula = (x, y, r, color, alpha) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, `rgba(${color},${alpha})`)
        g.addColorStop(1, 'rgba(2,6,23,0)')
        ctx.fillStyle = g
        ctx.fillRect(x - r, y - r, r * 2, r * 2)
      }
      nebula(w * 0.12, h * 0.22, Math.min(w, h) * 0.5, '59,130,246', 0.07)
      nebula(w * 0.88, h * 0.78, Math.min(w, h) * 0.55, '148,163,184', 0.05)
      nebula(w * 0.5, h * 0.5, Math.min(w, h) * 0.7, '30,64,175', 0.05)

      // Stars with twinkle + parallax
      for (const s of stars) {
        const tw = reducedMotion ? 1 : 0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.phase)
        const sx = s.x + mx * s.depth
        const sy = s.y + my * s.depth
        // glow for bigger stars
        if (s.r > 1.3) {
          ctx.beginPath()
          ctx.arc(sx, sy, s.r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${s.tint},${(0.12 * tw).toFixed(3)})`
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.tint},${(s.baseAlpha * tw).toFixed(3)})`
        ctx.fill()
      }

      // BIG orbit rings + revolving planets
      for (const o of orbits) {
        const cx = o.cx + mx * 0.6
        const cy = o.cy + my * 0.6
        // glowing white core sun (center system me skip)
        if (o.coreSize > 0) {
          const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, 24)
          core.addColorStop(0, 'rgba(255,255,255,0.6)')
          core.addColorStop(0.4, 'rgba(147,197,253,0.18)')
          core.addColorStop(1, 'rgba(255,255,255,0)')
          ctx.fillStyle = core
          ctx.beginPath()
          ctx.arc(cx, cy, 24, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = 'rgba(255,255,255,0.95)'
          ctx.beginPath()
          ctx.arc(cx, cy, o.coreSize, 0, Math.PI * 2)
          ctx.fill()
        }

        for (const ring of o.rings) {
          ctx.beginPath()
          ctx.ellipse(cx, cy, ring.rx, ring.ry, o.tilt, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(148,163,184,${ring.alpha ?? 0.18})`
          ctx.lineWidth = o.faint ? 1.2 : 1
          ctx.stroke()
          // faint second edge for big rings = premium glow (white)
          if (ring.rx > 180 && !o.faint) {
            ctx.beginPath()
            ctx.ellipse(cx, cy, ring.rx, ring.ry, o.tilt, 0, Math.PI * 2)
            ctx.strokeStyle = 'rgba(255,255,255,0.06)'
            ctx.lineWidth = 4
            ctx.stroke()
          }

          if (!reducedMotion) ring.angle += ring.speed / 60
          const cosT = Math.cos(o.tilt), sinT = Math.sin(o.tilt)
          const ex = Math.cos(ring.angle) * ring.rx
          const ey = Math.sin(ring.angle) * ring.ry
          const px = cx + ex * cosT - ey * sinT
          const py = cy + ex * sinT + ey * cosT

          const glow = ctx.createRadialGradient(px, py, 0, px, py, ring.size * 5)
          glow.addColorStop(0, `rgba(${ring.color},0.95)`)
          glow.addColorStop(1, `rgba(${ring.color},0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(px, py, ring.size * 5, 0, Math.PI * 2)
          ctx.fill()
          // white hot center
          ctx.fillStyle = 'rgba(255,255,255,0.95)'
          ctx.beginPath()
          ctx.arc(px, py, ring.size * 0.55, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = `rgba(${ring.color},1)`
          ctx.beginPath()
          ctx.arc(px, py, ring.size * 0.85, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Shooting star
      if (!reducedMotion) {
        if (!meteor && now >= nextMeteorAt) spawnMeteor(now)
        if (meteor) {
          meteor.x += meteor.vx
          meteor.y += meteor.vy
          meteor.life -= 0.02
          if (meteor.life <= 0 || meteor.x < -100 || meteor.x > w + 100 || meteor.y > h + 100) {
            meteor = null
          } else {
            const tail = 70 * meteor.life
            const grad = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x - meteor.vx * 12, meteor.y - meteor.vy * 12)
            grad.addColorStop(0, `rgba(255,255,255,${0.9 * meteor.life})`)
            grad.addColorStop(1, 'rgba(147,197,253,0)')
            ctx.strokeStyle = grad
            ctx.lineWidth = 1.6
            ctx.beginPath()
            ctx.moveTo(meteor.x, meteor.y)
            ctx.lineTo(meteor.x - (meteor.vx * tail) / 6, meteor.y - (meteor.vy * tail) / 6)
            ctx.stroke()
          }
        }
      }
    }

    buildScene()
    nextMeteorAt = performance.now() + 2500

    if (reducedMotion) {
      draw(0) // single static frame
    } else {
      const loop = (now) => {
        if (running) draw(now)
        rafId = requestAnimationFrame(loop)
      }
      rafId = requestAnimationFrame(loop)
    }

    const onResize = () => buildScene()
    const onVisibility = () => {
      running = document.visibilityState === 'visible'
    }
    const onMouse = (e) => {
      const rect = canvas.parentElement.getBoundingClientRect()
      mouseRef.current.x = (e.clientX - rect.left) / rect.width
      mouseRef.current.y = (e.clientY - rect.top) / rect.height
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default UniverseBackground
