import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons, setPokemons } from './redux/slices/pokemon'
import { useSelector } from 'react-redux'

export const PokeApp = () =>
{
    const dispatch = useDispatch()

    const { isLoading, pokemons=[], page } = useSelector(state => state.pokemons)
    
    useEffect(() =>
    {
        dispatch(getPokemons());
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
      <>
          <h1>PokeApp</h1>
          <hr />
          <label>Loading:{ isLoading ? 'True' : 'False'}</label>

          <ul>
              <li>
                  hola mundo pokeapp
              </li>
              <li>
                  hola mundo pokeapp
              </li>
              <li>
                  hola mundo pokeapp
              </li>
              <li>
                  hola mundo pokeapp
              </li>
          </ul>

          <button
              disabled={isLoading}
              onClick={()=>dispatch(getPokemons(page))}
          >
              next
              
          </button>
    
    
    </>
  )
}
