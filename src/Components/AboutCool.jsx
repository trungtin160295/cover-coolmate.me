


export default function AboutCool() {  
    const list = [
        {
            id:1,
            linkImg:"https://mcdn.coolmate.me/image/August2022/mceclip0_97.jpg",
            title:"Coolmate 101",
            content:"Tất cả những gì bạn muốn biết về Coolmate và gia nhập Coolmate"
        },
        {
            id:2,
            linkImg:"https://mcdn.coolmate.me/image/August2022/mceclip1_92.jpg",
            title:"Dịch vụ 100% hài lòng",
            content:"Bật mí dịch vụ Coolmate cam kết với khách hàng"
        },
        {
            id:3,
            linkImg:"https://mcdn.coolmate.me/image/August2022/mceclip2_100.jpg",
            title:"Cool-club- Khách hàng thân thiết",
            content:"Những ưu đãi hấp dẫn dành cho khách hàng thân thiết"
        },
        {
            id:4,
            linkImg:"https://mcdn.coolmate.me/image/August2022/mceclip3_34.jpg",
            title:"Câu chuyện về Coolmate",
            content:"Về Starup với mô hình Online D2C"
        },
    ]
    return(
       <div className="about-cool ">
            {list.map((content) =>{
                return(
                    <div key={content.id} className="about-cool-child">
                        <img src={content.linkImg} alt={content.title} />
                        <div className="title">{content.title}</div>
                        <span>{content.content}</span>
                    </div>
                )
                
            })}
      
       </div>
        
    )

}