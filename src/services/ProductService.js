import { useContext} from 'react'
import { DataContext } from '../global/DataContext';


const { appData } = useContext(DataContext);

export function getProduct(name) {
    return appData.find((product) =>  (product.name.common == name));
}