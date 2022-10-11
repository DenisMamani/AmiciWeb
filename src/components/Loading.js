import { LeapFrog } from '@uiball/loaders'
const Loading=()=>{
return(
    <div className='cargando'>
    <LeapFrog 
    size={120}
    speed={2.5} 
    color="white"
    />
    </div>
)
}
export default Loading;