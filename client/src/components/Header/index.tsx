import Image from "next/image"

import styles from './style.module.scss'

import logo from '../../../public/logo.svg'

import EstimateIcon from '../../assets/icons/estimateIcon'
import HamburguerIcon from '../../assets/icons/hamburguerIcon'

import NextLink from "next/link"
import { Dropdown } from "./dropdown"
import { useState } from "react"
import { MobileNavigator } from "./mobileNavigator"

export const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)
  const [mobileNavigatorIsOpen, setMobileNavigatorIsOpen] = useState<boolean>(false)

  function handleToggleDropdown() {
    setDropdownIsOpen(prev => !prev)
  }

  function handleToggleMobileNavigator() {
    setMobileNavigatorIsOpen(prev => !prev)
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div>
          <Image src={logo} alt="" />

          <nav className={styles.navigator}>
            <NextLink href="/">Início</NextLink>
            <div className={`${styles.dropdownContainer} ${dropdownIsOpen && styles['dropdown-active']}`}>
              <span onClick={() => handleToggleDropdown()}>Produtos</span>
              <Dropdown />
            </div>
            <NextLink href="/">Laudos</NextLink>
            <NextLink href="/">Sobre nós</NextLink>
            <NextLink href="/">Certificações</NextLink>
            <NextLink href="/">Contato</NextLink>
          </nav>

          <button className={styles.estimateButton}>
            <EstimateIcon />
            <span>Orçamento</span>
          </button>
          <button className={styles.hamburguerButton} onClick={() => handleToggleMobileNavigator()}>
            <HamburguerIcon />
          </button>
        </div>
      </header>
      {mobileNavigatorIsOpen && <MobileNavigator />}
    </>
  )
}