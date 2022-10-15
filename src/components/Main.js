import Side from "./Side";
import Steps from "./Steps";

const Main = () => {
    return (
        <section className="mt-8">
            <div className="max-w-[1344px] mx-auto px-10 block justify-center gap-8 md:flex ">
                <Steps />
                <Side />
            </div>
        </section>
    );
}
 
export default Main;