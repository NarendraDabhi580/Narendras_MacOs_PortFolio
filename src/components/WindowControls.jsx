import { closeWindow } from "#RTK/windowSlice";
import { useDispatch } from "react-redux";

const WindowControls = ({target}) => {
  const dispatch = useDispatch();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => dispatch(closeWindow({windowKey: target}))}/>
      <div className="minimize"/>
      <div className="maximize"/>
    </div>
  )
}

export default WindowControls