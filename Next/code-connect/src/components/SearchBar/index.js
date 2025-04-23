import { Button } from '@/components/Button'
import styles from './searchbar.module.css'

export const SearchBar = () => {

    return (<form className={styles.form} action='/'>
        <input 
            name='q' 
            className={styles.input} 
            placeholder='Digite o que você procura' 
        />
        <Button>
            Buscar
        </Button>
    </form>)
}