const Receiver = (props) => {
    const receiver = props.receiver;
    const setReceiver = props.setReceiver;
    const setList = props.setList;

    const handleChange = (e) => {
        setReceiver(e.target.value);

        // async function retrieve() {
        // const url = 'https://www.girchi.com/jsonapi/user/user?filter[orGroup][group][conjunction]=OR&filter[last][condition][path]=field_last_name&filter[last][condition][memberOf]=orGroup&filter[last][condition][operator]=STARTS_WITH&filter[last][condition][value]=სიდ';
        //     try {
        //         const response = await fetch(url);
        //         const data = await response.json();
        //         if (data.error) {
        //             console.log('Error retrieving whatever....', data);
        //             return false;
        //         }
        //         return data;
        //     }
        //     catch (err) {
        //         return console.log('API got an error', err);
        //     }
        // }

        // const retrieved = retrieve();
        // retrieved.then(result=>{
        //     console.log(result);
        //     setList(result);
        // })

    }

    return (
        <input
            className="search flex w-full justify-between items-center p-[10px] gap-[8px] bg-white border-solid border border-bgGray rounded-md 
                    h-11 placeholder:font-medium placeholder:text-sm placeholder:leading-4"
            type="text"
            placeholder="სახელი-გვარი / პირადი ნომერი / მომხმარებლის ID"
            name="userName"
            required
            value={receiver}
            onChange={e=>handleChange(e)}
        />
    );
}
 
export default Receiver;