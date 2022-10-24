

export default function Basic() { 
    const list= [
        {
            id:1,
            linkImg:"https://mcdn.coolmate.me/image/July2022/mceclip0_32.png"
        },
        {
            id:2,
            linkImg:"https://mcdn.coolmate.me/image/September2022/mceclip1_11.png"
        },
        {
            id:3,
            linkImg:"https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic3.png"
        },
        {
            id:4,
            linkImg:"https://mcdn.coolmate.me/uploads/February2022/Mask_Group_(2).png"
        },{
            id:5,
            linkImg:"https://mcdn.coolmate.me/uploads/January2022/CoolmateBasic4.png"
        }

    ]
    return (
        <div className =" basic ">
           <h1>Coolmate Basics</h1>
            <div className="list-basic">
                    {list.map((image) => {
                        return(
                            <div key={image.id} className="list-basic-child">
                                <img src={image.linkImg} alt={`Coolmate basic ${image.id}`} />
                            </div>
                        )

                    })}
                </div>
           
               
                <div>Dòng sản phảm mặc cơ bản chất lượng tốt và giá rẻ của Coolmate</div>
                <button> Khám phá Basic </button>
    </div>
        
    )
 }
