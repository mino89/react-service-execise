import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWrapper = () => {
  return (
    <SkeletonTheme >
     
        <Skeleton count={8} />
    
    </SkeletonTheme>

  )
}
export default SkeletonWrapper

const style = {
  wrapper:{
    display: 'flex',
    padding: '2rem'
  }
}