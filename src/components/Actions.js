

export const Actions = ({ClickSum,ClickRest}) => {

    return (
        <div>
            <div className ='resSumButt'>
                    <button onClick={ClickSum}>sumar</button>
                    <button onClick={ClickRest}>restar</button>
                </div>
        </div>
    )
}
 export default Actions