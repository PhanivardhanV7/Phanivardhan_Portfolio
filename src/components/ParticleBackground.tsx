import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 6

    const count = 2000
    const geo = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random()-0.5)*24
      pos[i*3+1] = (Math.random()-0.5)*24
      pos[i*3+2] = (Math.random()-0.5)*24
      if (Math.random() < 0.5) { col[i*3]=0.65; col[i*3+1]=0.55; col[i*3+2]=0.98 }
      else                     { col[i*3]=0.37; col[i*3+1]=0.65; col[i*3+2]=0.98 }
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(col, 3))

    const mat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7 })
    const particles = new THREE.Points(geo, mat)
    scene.add(particles)

    const lineMat = new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.06 })
    for (let i = 0; i < 60; i++) {
      const lg = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3((Math.random()-0.5)*20,(Math.random()-0.5)*20,(Math.random()-0.5)*20),
        new THREE.Vector3((Math.random()-0.5)*20,(Math.random()-0.5)*20,(Math.random()-0.5)*20)
      ])
      scene.add(new THREE.Line(lg, lineMat))
    }

    let mx = 0, my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX/window.innerWidth  - 0.5) * 1.5
      my = (e.clientY/window.innerHeight - 0.5) * 1.5
    }
    window.addEventListener('mousemove', onMouse)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      particles.rotation.y += 0.0008
      particles.rotation.x += 0.0004
      camera.position.x += (mx*0.4 - camera.position.x)*0.04
      camera.position.y += (-my*0.4 - camera.position.y)*0.04
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position:'fixed', inset:0, zIndex:0, pointerEvents:'none'
    }} />
  )
}
