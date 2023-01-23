import Side from "./Side";
import Steps from "./Steps";

const Main = ({loggedIn, setLoggedIn, showQr, setShowQr}) => {
    return (
        <section className="mt-8 text-left origin-top-left scale-75 xxs:scale-90 xs:scale-100">
            <div className="max-w-[1344px] mx-auto px-3 xs:px-6 pb-6 block justify-center gap-6 md:flex ">
                <Steps loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                <Side loggedIn={loggedIn} showQr={showQr} setShowQr={setShowQr} />
            </div>
        </section>
    );
}

export default Main;
