import Image from 'next/image';

const Loading = () => {
    return (
        <>
            <div className="flex justify-center">
                <Image src="spinner.svg" width={500} height={500} alt="loading..." />
            </div>
        </>
    );
};

export default Loading;
