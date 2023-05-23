import Button from "../../common/Button";
import './CalWrapper.css';

const CalWrapper = (props) => {

    const {allBtArr, oprationArr} = props;

    const allButton = allBtArr ? allBtArr.map((btobj)=>{
        return <Button key={btobj.value} btName={btobj.value} btFun={btobj.btFun} />
    }): [];

    const allOprationBt = oprationArr ? oprationArr.map((btobj)=>{
        return <Button key={btobj.value} btName={btobj.value} btFun={btobj.btFun} />
    }): [];

   

    return(
        <div className="main-cal">
            
            <div className="bt-name">
                {allButton}
            </div>

            <div className="op-name">
                {allOprationBt}
            </div>
            
        </div>
    )
}

export default CalWrapper;