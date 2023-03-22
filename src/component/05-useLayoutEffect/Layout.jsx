import {useFetch,useConter} from '../../hooks';
import {LoandingQuote,Quote} from '../03-example/component/';

export const Layout = () => {

   const {counter,increment} = useConter(1);
   const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
   const {data,isLoading,hasError} = useFetch(url); 
   const {author,quote} = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            (isLoading)?(
                <LoandingQuote />
            ):(
                <Quote 
                    author={author}
                    quote={quote}
                />
            )
        }
        <button 
            className='btn btn-primary' 
            onClick={() => increment(1)}
            disabled= {isLoading} 
        >Next Quote</button>
    </>
  )
}
