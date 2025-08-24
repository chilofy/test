import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { container, colors, media } from '../styles/common'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <Bar>
      <Inner>
        <Brand>Chilofy</Brand>
        <Actions>
          <Link href="#features">Features</Link>
          <Link href="#how">How it Works</Link>
          <Link href="#community">Community</Link>
          <Button href="#">Get Started</Button>
        </Actions>
        <MenuToggle aria-label="Open menu" onClick={() => setIsMobileOpen(true)}>
          <Hamburger />
        </MenuToggle>
      </Inner>

      <Overlay $open={isMobileOpen} onClick={closeMobile} />
      <Sheet role="dialog" aria-modal="true" aria-label="Mobile menu" $open={isMobileOpen}>
        <SheetInner>
          <SheetHeader>
            <Brand>Chilofy</Brand>
            <Close aria-label="Close menu" onClick={closeMobile}>×</Close>
          </SheetHeader>
          <MobileNav>
            <MobileLink href="#features" onClick={closeMobile}>Features</MobileLink>
            <MobileLink href="#how" onClick={closeMobile}>How it Works</MobileLink>
            <MobileLink href="#community" onClick={closeMobile}>Community</MobileLink>
            <PrimaryCTA href="#" onClick={closeMobile}>Get Started</PrimaryCTA>
          </MobileNav>
        </SheetInner>
      </Sheet>
    </Bar>
  )
}

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
`

const Inner = styled.div`
  ${container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`

const Brand = styled.div`
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: ${colors.textPrimary};
`

const Actions = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  @media ${media.md} {
    display: none;
  }
`

const Link = styled.a`
  color: ${colors.textSecondary};
  font-weight: 500;
  &:hover { color: ${colors.textPrimary}; }
`

const Button = styled.a`
  background: ${colors.brand};
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
`

const MenuToggle = styled.button`
  display: none;
  @media ${media.md} {
    display: inline-flex;
  }
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: white;
  color: ${colors.textPrimary};
`

const Hamburger = styled.span`
  position: relative;
  width: 18px; height: 2px; background: currentColor; display: inline-block;
  &::before, &::after { content: ''; position: absolute; left: 0; right: 0; height: 2px; background: currentColor; }
  &::before { top: -6px; }
  &::after { top: 6px; }
`

const Overlay = styled.div<{ $open: boolean }> `
  position: fixed; inset: 0; background: rgba(2, 8, 23, 0.45);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
  transition: opacity 0.2s ease;
  z-index: 30;
`

const Sheet = styled.aside<{ $open: boolean }>`
  position: fixed; top: 0; right: 0; bottom: 0; width: 320px; max-width: 86%;
  background: white; border-left: 1px solid #e2e8f0; box-shadow: -8px 0 24px rgba(2, 8, 23, 0.08);
  transform: translateX(${(p) => (p.$open ? '0%' : '100%')});
  transition: transform 0.25s ease;
  z-index: 40;
  display: grid;
`

const SheetInner = styled.div`
  display: grid; grid-template-rows: auto 1fr; height: 100%;
`

const SheetHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid #e2e8f0;
`

const Close = styled.button`
  width: 36px; height: 36px; border-radius: 10px; border: 1px solid #e2e8f0; background: white; font-size: 22px; line-height: 0;
`

const MobileNav = styled.nav`
  display: grid; gap: 8px; padding: 14px;
`

const MobileLink = styled.a`
  padding: 12px 10px; border-radius: 10px; color: ${colors.textPrimary}; border: 1px solid #e2e8f0; background: white;
  &:active { background: #f8fafc; }
`

const PrimaryCTA = styled.a`
  background: ${colors.brand}; color: white; padding: 12px 10px; border-radius: 10px; font-weight: 700; text-align: center;
`

export default Navbar