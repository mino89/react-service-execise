import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWrapper = () => {
  return (
    <div className='card'>
    <SkeletonTheme >
        <Skeleton count={8} />
    </SkeletonTheme>
    </div>

  )
}
export default SkeletonWrapper