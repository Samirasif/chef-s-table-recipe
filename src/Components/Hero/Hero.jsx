import BannerImage from "../../assets/images/banner1.jpg";

const BgStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "92%",
    height: "100%",


};
const Hero = () => {
    return (
        <div style={BgStyle} className="ml-14 my-3 rounded">
            <div className="bg-slate-800/40 border-solid border-2 rounded-md">
                <div className="container min-h-[650px] flex items-center">
                    <div className="w-3/4 mx-auto text-center text-white p-4 space-y-5">
                        <h1 className="text-5xl font-bold gap-y-2">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="text-xl my-3">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer</p>
                        <div className="flex justify-center my-3 gap-x-3">
                            <button className="border-solid bg-green-500 px-5 py-3 rounded-full font-bold">Explore Now</button>
                            <button className="border-solid border-2 border-white rounded-full font-bold px-5 py-3">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;