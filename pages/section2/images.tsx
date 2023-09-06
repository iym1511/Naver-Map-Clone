import Image from "next/image";
import example from "/public/example.jpg";

const Images = () => {
  return (
    <div>
      <h1>img tag</h1>
      {/* loading="lazy" 를 사용하면 스크롤하다 특정 영역으로가면 lazy하게 이미지를 다운(네트워크 절약)*/}
      <img
        src="/example.jpg"
        alt="example"
        width={500}
        height={100}
        loading="lazy"
      />
      <figcaption>example img</figcaption>

      {/* Image를 사용하면 서버에서 자동으로 용량 줄여줌 */}
      {/* quality : 얼마나 최적화 할 것인지, blur : 크기가 얼마인지 미리 알고 미리 최적화 */}
      <h1>next/image</h1>
      <Image src={example} alt="" width={500} height={100} quality={100} placeholder="blur" />

      <figure>
        {/* 외부링크 넣을떈 반드시 높,넓이 설정 */}
        <Image
          src="https://inflearn-nextjs.vercel.app/example.jpg"
          alt="v13 image"
          width={500}
          height={100}
        />
        <figcaption>v13 image</figcaption>
      </figure>

            {/* ERROR */}
      {/*<figure>*/}
      {/*  <Image src="/example.jpg" alt="v13 image" />*/}
      {/*  <figcaption>v13 image</figcaption>*/}
      {/*</figure>*/}

      {/* 이미지 크기를 모를떄 fill을 주면 부모에 의해 설정 / objectFit 은 이미지 안뭉게지고 딱맞게 해줌*/}
      <figure style={{ position: 'relative', width: '500px', height: '100px' }}>
        <Image
          src="https://inflearn-nextjs.vercel.app/example.jpg"
          alt="v13 fill"
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>

    </div>
  );
};

export default Images;
