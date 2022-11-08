import Side from "./Side";
import Steps from "./Steps";

const Main = ({loggedIn}) => {
    return (
        <section className="mt-8 text-left">
            <div className="max-w-[1344px] mx-auto px-10 block justify-center gap-8 md:flex ">
                <Steps />
                <Side loggedIn={loggedIn} />
            </div>
        </section>
    );
}

export default Main;
