import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
        <ThreeDots color="#3f51b5" height={80} width={80} />
    </LoaderContainer>
  )
};
  
export default Loader;