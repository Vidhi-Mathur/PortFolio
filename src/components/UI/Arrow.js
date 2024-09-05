import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const Arrow = ({ onClick, direction }) => {
    return (
        <div className={`absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center ${direction === 'left'? 'left-2': 'right-2'}`} onClick={onClick}> 
        {direction === 'left'? <ArrowBackIos className="text-white text-xl" />: <ArrowForwardIos className="text-white text-xl" />}
        </div>
    )
}