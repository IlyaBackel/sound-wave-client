export const Header = () => {
    return (
        <div className="w-full flex flex-row gap-10 justify-around items-center h-15 bg-[#ff9e9e]">
            <div>Logo</div>
            <div className="flex gap-5">
                <div className="rounded-3xl h-10 w-10 bg-[#f4f4f4] justify-center items-center">home</div>
                <p>search</p>
            </div>
            <div>Profile</div>
        </div>
    );
};