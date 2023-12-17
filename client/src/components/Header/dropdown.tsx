import NextLink from 'next/link'

import Icon1 from '../../assets/icons/icon-dropdown-1'
import Icon2 from '../../assets/icons/icon-dropdown-2'
import Icon3 from '../../assets/icons/icon-dropdown-3'
import Icon4 from '../../assets/icons/icon-dropdown-4'
import Icon5 from '../../assets/icons/icon-dropdown-5'
import Icon6 from '../../assets/icons/icon-dropdown-6'
import Icon7 from '../../assets/icons/icon-dropdown-7'

import styles from './style.module.scss'

export const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <span>Catálogo completo de itens para você</span>
      <div>
        <span>Laborátório</span>
        <ul>
          <li>
            <NextLink href="/">
              <Icon1 />
              Equipamentos
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <Icon2 />
              Termometros
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <Icon3 />
              Acessórios
            </NextLink>
          </li>
        </ul>
      </div>
      <div>
        <span>Utensílios</span>
        <ul>
          <li>
            <NextLink href="/">
              <Icon4 />
              Inox e Ferragens
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <Icon5 />
              Vidrarias
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <Icon6 />
              Plásticos
            </NextLink>
          </li>
          <li>
            <NextLink href="/">
              <Icon7 />
              Porcelanas
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}