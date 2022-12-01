


const TweetButton = ({ onSubmit, checkIfDisabled, onChange, label }:
    { onSubmit: () => void, checkIfDisabled: () => boolean, onChange: (e: any) => void, label: string }) => {

    return (

        <button
            disabled={checkIfDisabled()}
            className='rounded-xl py-1 px-4 font-bold capitalize bg-twitterBlue disabled:bg-slate-300  dark:disabled:bg-twitterBlue  dark:disabled:opacity-25  text-white'
            onChange={onChange}
            onClick={onSubmit}
        >

            {label}
        </button>
    )
}

export default TweetButton