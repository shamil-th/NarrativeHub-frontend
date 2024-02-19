import React, { useState } from "react";
import Style from "./BlogCard.module.css";
import BlogWriter from "./BlogWriter";

const BlogCard = () => {
  const blogDetails = [
    {
      time: "5 min",
      title: "Gardening Gems: Growing and Decorating with Plants",
      img: "https://media.istockphoto.com/id/1225173869/photo/house-boat-anchored-in-lake-with-jungle-background-backwaters-kerala-india.jpg?s=612x612&w=0&k=20&c=uo-bsRQjhlT9AgeWBs_pkSvHQwStCelMC75EUpzwjHU=",
      description:
        "Lorem ipsum dolor sit amet. Ea placeat dignissimos ut corrupti voluptatibus 33 aspernatur nihil aut fugit ducimus ut totam unde? Id iste galisum aut culpa voluptatem est quia debitis qui voluptatum aspernatur nam incidunt dolores et corporis sunt. Est similique facilis vel amet omnis qui quod repellendus quo tenetur esse qui iste molestiae vel consectetur repellendus ex facere saepe. Et voluptas voluptate et reru",
      name: "Jacob David",
      writerImg:
        "https://mamch.monarkuni.ac.in/wp-content/uploads/2017/10/user9.jpg",
    },
    {
      time: "10 min",
      title: "I Am Thought — a poem of travel & imagination",
      img: "https://savannaintl.com/wp-content/uploads/2020/12/travel-world-1.jpg",
      description:
        "In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., our text generator will provide the random extraction of terms and steps to compose your own exclusive Lorem Ipsum.",
      name: "Emily Wilson",
      writerImg:
        "https://demo.wpzoom.com/foodica-patterns/wp-content/plugins/block-patterns-for-food-bloggers/patterns/images/author.png",
    },
    {
      time: "Just now",
      title: "Vans Aren’t Just Vehicles. They are Travel Companions.",
      img: "https://www.w3schools.com/css/img_5terre_wide.jpg",
      description:
        "Lorem ipsum dolor sit amet. Ea placeat dignissimos ut corrupti voluptatibus 33 aspernatur nihil aut fugit ducimus ut totam unde? Id iste galisum aut culpa voluptatem est quia debitis qui voluptatum aspernatur nam incidunt dolores et corporis sunt. Est similique facilis vel amet omnis qui quod repellendus quo tenetur esse qui iste molestiae vel consectetur repellendus ex facere saepe. Et voluptas voluptate et reru",
      name: "Tom Hardly",
      writerImg:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhUYGBgYGBoZGhkYGBwZHBgYGRgaGRgYGRgcIS4lHB4rHxgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrIyw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQxNDQ0NDQ0NDQ0NP/AABEIAN4A4wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABBEAACAQIEAwUGBAQEBAcAAAABAgADEQQSITEFQVEGImFxkRMyQoGhsQfB0fAjUoLhFHKSwjNisvEWJENTY6Kj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAAICAgIDAQEAAAAAAAAAAQIRITEDEiJBMmFxUWL/2gAMAwEAAhEDEQA/AOpQhCaBCEIBCEIBCEIBEMWMJgKZGxFdUBZ+RsBuSb2AA6kmeOJxT5itPKMpAJYE6nWwAI5feZzjvGvZge0WxLZu7d7gEEFRa8zasiz4nx80kzmixuwRVDqS7nZQFv4+VjKymMfUOb/EiluMiU0e1jazMwOvjeYrifav21UZRkRDZb3BB5lrXO19vKe3D+POmZqbqNb6hlLf0g2b5zO2vVr2xmKwz58RUapTOmbIqhCbWVkTkf5gee0u8BxUGr7JrgsudQ3vA/Eh8RvMJie2gqUqlKrSLh0KnIQNwfhbXpJ/ZmvVq1sNUqJlyUiuY71LBFz6bDbfxllTTocWea1BHhptksSLCA0xDHRJA0xpjzEMo8yI0iPMaYHmZ5tPUxrCQeMI7LCUWcIQgEIQgEIQgES8CZBx/EUpIWqG3QcyfAbmQSq1VUGZiABzMpcVx+kthqLkAM6si3vtdgLHwNr30mK432tr1HPs8qKBppnfc94/Cult/le5mQx+Mz3NSo9VulwFv48vRTMXJv1dIr9oqSIRnzMXc6a3OY+o26bTA9peJNVdCd1Sxsb631I+kz1TEux1PyF/qYj1gBtcjqdOcnKzSVTqKQCepJO5849XJ0vpy/uZBo1LWuotzAH18pcKVK9wg33DWDDyHOF7RUSxXcHnb9PlLSjWdVsjsl+QYi43GnLXWNyKPj+W5B8pXYl77Hn8/X97ybXTYr2zrhCHIYgd1gcrXsbHTeaWlxR8RR9pQr2xCLnNMEZWI1KFW5cri05RicrasDoOpFtNLfOMw1UgC4FxchhYnQ7EbEbTUtSyO89muMDFYdKwXKWBzKd1dSVZT8x9ZbXnOvwzxhSn7InMpYte3uubmxPMGw8bmdEBm5dudmqWJFiSoQxDHGIYDDGmPMaYDDGET0MYZAy0ItoSifCEIBCEIBGu1gT01jjPDE4hUUs7BQNyxsPUyCO9NWXPUYnTMRmKqBa+wNiPE3nM+O8cStWdaZARO6uUWDH42uPnG9ruPVKr+xo1F9kEsbDMC2ouTz0+Wsx65gbXJ1OwH3ExldumOOnvjatzlT5m2lvLkJVYitlGhtfbbXxsJb01HsyTqzEm3heyr4agn0lVisPrc6kbdBaSLXkw0uT08tJFa+bmfT73koYcuwFwANtefl+9pJxfDmpgEZTccr+tiPtLtnSLTYBhYknztr5Syw1QAksLeB8vKVqUzmN1v+g2PpJ+DxSZu9ew0O1+kVqParUUHQAc730+k8gha5phjbe2u/zNvnDilSmTenbzBN7/AGkTh2J1IPLa2hmVONXKbNrPAP3iBtofW+k8sfVOaKhPW56aSo0HDMc9NgUuCDoV8+Y8xOo9ku0z1yadVe8ALOAQOliD+9Zx2grjUa+Yv58pf8J4w6OH0uCL9DYg628bekS6LNx3IGEyHDu21Ko6IFIZ2C2PjuQ2xA9ZrVadJdudmjohixDKhpjTHmNMBhjTHmMMgZCOhKJsIQkBCEIDWacx7dcSvVbD1CQEUFApspdzdXfqFW4A2vOl1NCCdufh4zm3bamq1g9UMLhwCALOMw9mAx02Y3HK3zmMumse2LIzv3baDUjS+Ub6bwo1VpuMwvlUm56kf33nqncdl6gaDlexP5yvxqXd8p3NvQgTMdUvAkWzvtvbqTtE4imdLiwUasfSw8tTK1KjBFB5HTnp+/vHVMUXUqDpfl53lR44NO/bezWv8/0+8t8W7OoBI02uOtgNpW0j7PvbX8NtP7CeiYsuRzsSxv5afnHCclweG/id9roAzW8he0r0w2csdrtbT5mWyUi2dif2dAAJGw6FNxzvtzvb842aV4oMtxa/j4T3p0HTUA6j+/2nvXZiFCgl1vfra9v09Y2tiXItcjQDa2q7MPpG4aqAKVzff9/WTaCXBNtvG4tPHDZgxN9976C/2kxqoVMqa9W6noPAQh9SqE5Hrp9o6lWW2bXUNe/LXu/f6StqPsSd9/1nk1wLDUH6840srTdnsa9NrIiOHFiH+IZgO624Ou24tfW06j2V4szlqFTMHT4X1fL8JLD3vPnp1nD6dQgi5sBz3tfn9eU3vY3GkVjVdy3cYXY95rWLre+uUAkeYlnCXl1wGEgcNxmdVO+YXB6ryMnzbmQxpjjGmUNMaY4xpgNhFhAmQhCQEIQgNdra7Tkn4i8ZRnVKdiiH4T3S1u8enMajxnRu0FPOiqfcLDN8yAL+s5J2yCGu6oLqhy2vzUBWH0mMq3jPtSVMb3xr4X6gjT7iRsRVOcsp+E28G29bwxmGXRqbXH8puGXw8ZEcEkD/ALzLadhaF0VBrrcnz/ISy4ZwGoT3kK+JGh8j+ckdm8LeqAOSXPnfSdFwWDGmk4553eo9GHjmt1k6vZIvTdFIDEDKfFbH5Am8xuEwxoVCldCpsVOZdtdPAjTcX3necPhRI+P4IlT31B8xeTHLKQyxxt25ThnpFjdsuUC3i2+vhE4qAVV6Y0bRhYDvW++k2mL7IhagenlyEjOjCwsL2Kkbb/aJxDs+FU+zUFSBnTkQNipv3WH7tL7aPXcYHA4tKdZWqe4VIva+mhHpa09OK1adUg0kKoDbNaxa+mg6bmW2J4Gvw5r/AMrowN+eoFj5iVtTC1mYCx00W4IVf8o/Oa9peU9cpwpMfQFylNNbaseQ6yPhkI94+6Da/Xb9+UvcbgHRerNcnyXUk/QfOVGIS1wNQCfI6/Waxy25ZY6qFW0AB1J+3IxcFc3Ui4Av5CeC5sxLHfcmTcO6ojEa7r58ifSdK5fZudds4+Y1l1wjFllRGcIiZrsBY5GvmAG5JBIA/wC8zVCjm1N77f3kum2mVSb8zJVjtHZXia1a1kNlVAqryVRcL/UdfkpOmk2c5n+G2RMiA95izMd793Rfna/XQdZ0ubx6Zy7BjY4xpmmSGNMcY0wGwhCBNhCEgIQhAi8Qp5kYeE4f2hwBWs/fGbRiLEa23HyndajCxvsN/K15xXtXiA9RnC6kqijmbKO8bdfsTOeTeDLuzC97C2+n6TwDliAOZkh3ZX1922/l06SL7fPUAFrEgeJv4+kjo3/ZWkLgKPM/qZ0LCUrTH9l6NgLC03OG0Gs83eT1W6mkygs9WWMSoI8VAZ1kc68KqXni2GvJr2jXcASahLVNicAOkr3wA6CWWP4vTT32AmT4n2ypKbIS3iNpn1306e+u3rxPhNwSu9rTCjhj03ZKi3ubg6bGXb9parsGpgsByBNvXa09F4n7ZiKlPI3L+8slxZtmTE8WwoRxbYj6ytUbg6C+hmn7UUDYOvIzN0Lt++c6434vPlNZJOETIQx1+oMm4bCs75aaMx3AW7HWQsRmSmNADn+e1rH0/d5vfwt4c5qNW2UIBfzNv9pmpNs3hqew3Zx6C+1r++QQq/yKTc+bGbCEbOkmnO3YgYRDKhDGmOMaYCQiQgToQhMghFhAqeNo5Q5AddGsue69GUEEjy1nJuNcKqq7Nkdrk97I6jqbZ7NYDn9Z2+VfaHCl8NVC+8ab2/0mZyx21jlp8816nc1HM3Hgef2kVl2cD3bH0OkvH4ORWZKhy5FJ015GwB53tKulhnKlgNLlT6XtMunbpvCselGiHY7gFR1JF7SNX7aOgF1uTynnw3hi1MPSZ7kqg05bDWPThdVqgWkgRAe82zsOisblfvOEuMunp1lZt4/+LcS1u4EB2Ld0er2vNDwjjTn/AIjqT4G8oK3YVjULZhYtmu1yxFjZSene+dhNCeAXYMmVQAAQLm/jfrLl+lw/6XycQzDTWQeJcTKL3ri8suC4IJvqYcZwava4mdW47WWe2nOuJutQ3Kk623tryHnKzifCq1I3pqrEoGUIi1DmJtlu4Og3J8PETp9LhaEA5FuNjbae4wJG1vSXHc7TLWXXDnOCGMRVNRAVOliiqQL9ABLv/DZj7g67azWpgep+QFo3FUlGwky/1cf8c341gyyOpGoBI+WsyWAwRuLcyB53nS+L0wCT1lHwXAHRyACSbE/CNgfO03jlwlxlyUXaHBBstJR33dco67KfqZ2XgHCxhqK0xuAL89coFgedrTlLYF8Tj6Ap2CpUX4gTlptnd7D3Rvq1rna87Os74Th5PNZcroQhCdHIRIGJAQxDFjTAbCEIE+EIsgIQhAIhEWEDA9uezyBXxCXRgtjYDKVtYA9Lcuk5pgMbmy0mbul/dI0zbAgjnrzn0BjsMHRlIBuCLEXBB3BB3nDOO9mnSuyUwFa91VmCWF9ChY2Iv43nPKOmGWnRezNNQiqdQBb00/KadMMttBMn2RdjTUPbOpyuFIIDC17Eac7/ADm1orpPPMeXruU1uI3+EU7/AFJnqaYUaCerm0jVql9Bzls0k3RhDrPPHNrH4RdYzHDXWa18Wp+RmEJBk8aynxlVUTMCLiS0xJABPSZnC5Y75TssgY9NJ7rigRoZExeIFjrJlYmMsZPjL91vCZ3EcZCUxSoA1KzqAETvEEi1zbYSz4rWzFh4yZ2YxCDFZabhyU/iZFXIrnLkRWGgIUEm3jOnjx25+TyXHpa9iuz5w6B3QIxUALfM3/MztzJ5DkPMzVQhPQ8loiRYhlQkIRICRpjjGGQJCEJRYRYkWQEIQgEIRIBKLtZwgYmiEC3bMLPzTe7Drppbxl7AyWEunOez3DquDr1KVRs6HI4cCwzHRgdTbYehm4w+JBG89OI0M9N1G9rjzGo+0zGArMDY8xcfpPP5Pjk9nhvtjyu8ZjBmCDc/aQOJ1nCXpsAw2lQcbkZi66sTr0A28hvPahjqbAlqqEdAQ248Jjvt1l11EfAdoalM2qi4/mH5jlI/GuN1qhAo2A6nX0EsHfD2OjNzOh06bx1BEQjJSdidhlNzK3+9KHh2Bqs4atUdgCDqdL36TUvxDKLAXnm+IqKGy4YjLvc9dvOUPHOIYhAV9mikf1EkqSALeQHzl4Yu/urJsec110vuu1/7x9Z2Zrcihb0t+s8+z/B6jIKmJtnbUKNlvbfxknijqjuB8KKvzYkn6ATnliTL6ZPFbnqZ0ThHBaeGUCmCTa2ZrX1tcCwAGw2HITAYVPa4img5ut/8oN2+gM6kTPT4Zw8vnvOjYQiGdnARIQgJEixICGNMDEMBIRIQLKEITIIQhAIQhAIQhKCZjieG9m+nuucyHo25X98jNPM7244pTw2Eeo4zNtTW9iam4seVrEnwBnPyY+00348/XLb0pUEcBwBrowIGh5zPYrs37Cr7XDqAre/T+Fh4dD+/GP4Rxa1idmAJHUEXDTSM4dbg3nnleycX9K3DcfRbK2Hq3KWfuAgEGwBN7G4Nxa401tLU8dpd05XuOWRtNDfl9pAVwOQInr/iFGyidJWr4sbzt44/jOIfMuHoBQw9+q1ip11yLfMNt2XnImGwZdy9Uh2JB0FlBAsAoJJ9T+knVK+YW0A8OcdhlJOg0Elq6xxnE5S6tUIL8gJheI4wtmY/Exb8h9BND2nxGWk2uu3rOf8AEsZ3Qo3tMWbrnLpadk+LUaeMRa2hqKyI591Xuuh6Eg2B8fGdTM+dePUSFpnmGP1F/wDbOq/h72q/xNP2NVv41NdzvUQaZv8AMNj8jznpw/F5PJv25bSJCJOjAiQhASIYsaTAQxDFMaYDYRLwhVpCESZQsIkIBFiQgEWRMdxClRXNWqIi9XYLfyvvMfxX8S8Ml1oI9VuvuJ6nvH0gbqcO/Enjv+JxBRW/hUmyL0JuM7/Mi3ko6z04r2/xla4VxSQ6WpixseRc3PpaZWqQFOl7I/yuhUH1MDfcMDNh6Lj3vZpfx7ovNF2b4je9NtxqB4a6fvwlR2SS+GpD/wCNP+kT2xmFem4q0wbqbkDmOYH75TxW6ye/XxjU18KDqDaRW4ZmPvG3nIKcUzi4NxYEX+WslDiigAXFj9PP1nXHSe10lphUQa6/L+8lCsirceUoMRxlWXQi/L8uf7tKfGcfC3sdhYeekVLlxyXthxHQLfU8r/vpM3gcGztmaSaGGes+ep/SvQfrNBQwoUbTnll9RrHH7rKdpcJen5EH8vzmZ4djnoVFqU2yujXB/IjmCNCOhm77RJ/CfwE5y289Hh/F5vNPk+hOzHH0xtEVE0caVEvqjfmp3BlvPnbg3F62GfPQcoxFjaxDC97Mp0InROCfiUDZcZTsf56eo8yhNx8ifKdnF0WJIuA4hSrpnourr1U3t4Ebg+BkkmQBjIpiGUBMYYpMaYBCNhCrWEJU8X7R4bDf8aqob+Qd5/8ASNR85lFtEZgBcmw6mc04r+KAsRhaOvJ6h28ci/rMNxXj+JxJvWqO4/lvZR/QNIHZeK9ssHhwc1UOw+Cn3zfzGg+ZmB4v+JOIe60FWivX339ToPSYYmebby6EjF416rl6js7HdmJY+pkV20vPQTxxJ0HmIHsg0jsSl0c9Aq/6nB+yn1jkXn0j0p5kfwNPl1Lem0DpHY4/+XTwUD0mjekCJmOxz/wwOk1anSeHKc178bwyvEuGkEmm2XfTca76cpUvhK5/9QAeAN7TZYunrK9sPrrJ7ZTpqY43tmDw9gO87HysJHGHAbQXPU6maXH4YBfEyPQwWsTLK9lxxnT3wFCyiWNoUqVhPTLEhay/a18lBv8AmIH1ufoDOctvN128rAZE8C5/6V/3TDsNZ7PFNYx4vLd5ULJKG40ngNotE6To5rDBYypRcPSdkYc1Nj5HqPA6Td8D/EVhZMYmYf8AuINf605+a+k53njgRA+gMDj6dZA9F1dTzU3t4Ebg+BnuZwHA46pQfPRdkbqp3HQjZh4GdB4B+IKPZMYuRtvaKO4f8y7r5i48oG7MaYynVV1DIwZSLhlIII6gjeKYBeES8IVzbjX4i4mrdaAFFNRcd57f5joPkJiqrliWYliTckkkk9STuYsJEMtDbaOhaUIJ5vPWNZYDAJ5lczgdNfSeuwjaJCgu0CSxsPDqdJKwChqb2N++nMEHRrfnMvia5c3O3IcgJqeBBaWTD1wyNUdmubjIwyqudenda/MX9Z9Un5T+tr2ZQgCa2kZUcEwZQ5WFiNCP3y8ZfGlaeO9ve8atO8h1aMsyk8mSTSyqmpQvvraPp4aWHs/CKy6SaW1CyR6pPZKd558VrCjQeofgUkeJ2UepAmscd3TGWUxm65X2txBfE1OinINb+6LH/wC2b1mdaTMSxJJO51PiTqZDM9kmnht2Fi0doJH0x3ZQ5fGOQ/SITcQUQAnpFV4CefOBa8K47Xwx/gVGUHdd1PjlbS/jNPgfxDrKbVqaOOqXRvzB9BMG0UOeUDr9LtzgiAWdlJ3UoxI8DluPSJOQ+1iwPcxAYXjH0gehhEBvG3kD43NEvEMBWFxpIGPrXGUbDTz6mSwbSLUoAnWFM4Rh/aVkTWxYE21IUasR8gZM4tiWarv7uU7bHfQ8uXPlH8MAR84GoRz/APm0hIpuSTcnU+Z3l6jOuduy/h3xtcXTFCoQMRSW6Hb2iD8xzHK4PMgbVaN9xPnrhGOfD1UrUzZqZDDxt8J8CLg+Bn0mHD01qqLZlDWPQgHXx1nLPHfLvhnriq5qM8DTlgReMKTh6u+0L2ca9OTMsfTpXIETHZbrlDo4c7AXmU/F+i9PA08p7rVgKlumViq+oB+XSdNoYYINN+s4t277RNisc2ENxRpl6OXq/wAVU66kMoy9APEid8MNV5vL5N/xy4VmQ5QdtwdR6SRTrBttD0/SQ6+9+up8zvPMdZ0c4s15+Udhics8cNUzb/PxkmgJQ+0WJaKRaA0nlEKxVgTARlMQCOERjAbCJeED/9k=",
    },
  ];
  return (
    <div className={Style.blog_cards}>
      {blogDetails.map((data, index) => (
        <div className={Style.blog_card} key={index}>
          <div className={Style.content}>
            <img src={data.img} alt="" />
            <p className={Style.time}>{data.time}</p>
            <h2>{data.title.length > 100
                ? data.title.slice(0, 100) + "..."
                : data.title}</h2>
            <p>
              {data.description.length > 150
                ? data.description.slice(0, 150) + "..."
                : data.description}
            </p>
          </div>
          <BlogWriter writer={data} />
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
