

export default function Popup(props) {

    return (props.trigger) ? (
        <>
            <div className='bg-white w-5/6 z-10'>
                { props.languages && props.tools }
            </div>
        </>
    ) : ''
}