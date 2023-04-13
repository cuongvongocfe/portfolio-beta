import React from "react";
import bannerImg from "../../assets/Banner/banner-kayo-2.jpg";
const Home = () => {
  return (
    <div className="bg-base-200 p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
        <div className="w-[300px] lg:w-full">
          <img className="rounded-3xl hover:border-2 hover:border-secondary" src={bannerImg} alt="banner" />
        </div>
        <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-secondary font-bold">Xin chào, tôi là Cường</h1>
      <p className="py-6 lg:text-lg text-sm font-bold">Tôi là một lập trình viên mới và mong muốn tìm kiếm các dự án liên quan đến các ngôn ngữ react, với khát khao có thể giải quyết các vấn đề thực tế và đưa doanh nghiệp và dự án được phát triển cao và xa hơn, tôi mong sẽ góp một phần công sức của mình để giải quyết các vấn đề nan giải của dự án củ cũng như phát triển những dự án tìm năng.</p>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
