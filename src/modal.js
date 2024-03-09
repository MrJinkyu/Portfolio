"use strict";
const projectBtns = document.querySelectorAll(".project_item_btn");
const modalWrap = document.querySelector(".modal-wrap");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal_close-btn");

projectBtns.forEach((button) => {
  button.addEventListener("click", openModal);
});

modalWrap.addEventListener("click", function (event) {
  if (event.target === modalWrap) {
    closeModal();
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.dataset.name === "close") {
    closeModal();
  }
});

function openModal(e) {
  const title = e.target.dataset.title;
  switch (title) {
    case "samsung":
      modal.innerHTML = createSamsungContent();
      break;
    case "ott":
      modal.innerHTML = createOttContent();
      break;
    case "mbti":
      modal.innerHTML = createMbtiContent();
      break;
    default:
      console.log("해당 프로젝트는 찾을 수 없습니다.");
      break;
  }
  modalWrap.style.display = "block";
}

function closeModal() {
  modalWrap.style.display = "none";
}

function createSamsungContent() {
  return `
    <i class="fa-solid fa-xmark modal_close-btn" data-name="close"></i>
  <div class="modal_left-box">
    <img
      src="/images/samsung.png"
      alt="samsung project image"
      class="modal-img"
    />
    <h4 class="modal_title">
      삼성전자 웹 페이지<span class="modal_category"
        >Personal project</span
      >
    </h4>
    <div class="modal_link-box">
      <p class="link-title">배포링크</p>
      <a
        class="modal_link"
        href="https://teal-mandazi-2a1254.netlify.app/"
        target="_blank"
        >https://teal-mandazi-2a1254.netlify.app/</a
      >
    </div>
    <div class="modal_link-box">
      <p class="link-title">레파지토리</p>
      <a
        class="modal_link"
        href="https://github.com/MrJinkyu/Enterprise-Web-Page"
        target="_blank"
        >https://github.com/MrJinkyu/Enterprise-Web-Page</a
      >
    </div>
  </div>
  <div class="modal_right-box">
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">프로젝트 소개</h5>
      <p class="box-title_content">삼성전자를 소개하고 제품을 판매하는 기업형 웹페이지로, 사용자 관점에서 자연스러운 흐름의 전자상거래 경험을 제공합니다.</p>
      <p class="box-title_content">상품 구매 과정을 실제 서비스와 유사하게 구현하여 사용자가 상품을 선택하고 장바구니에 담고, 배송지를 입력하며 주문을 검토하고 결제하는 과정을 체험할 수 있도록 했습니다.</p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">배운점</h5>
      <p class="box-title_content">
        웹 개발자로서 기업형 웹 페이지를 구현하며 실제 기업 페이지에서 필요한 다양한 기능과 커머스에 대한 이해, 그리고 모바일과 PC 사이즈의 반응하는 레이아웃을 경험할 수 있었습니다.
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">구현 기능</h5>
      <p class="box-title_content">
        이미지 슬라이드 배너, 장바구니, 상품 추가, 결제 ui 연동, 챗봇
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">기술 스택</h5>
      <p class="box-title_content">
        React, React Router, React Query, Cloudinary, Firebase, Swiper, Tosspayments, React Simple Chatbot
      </p>
    </div>`;
}

function createOttContent() {
  return `
  <i class="fa-solid fa-xmark modal_close-btn" data-name="close"></i>
  <div class="modal_left-box">
    <img
      src="/images/ott.png"
      alt="ott project image"
      class="modal-img"
    />
    <h4 class="modal_title">
      OTT 영화 사이트<span class="modal_category">Personal project</span>
    </h4>
    <div class="modal_link-box">
      <p class="link-title">배포링크</p>
      <a
        class="modal_link"
        href="https://transcendent-cendol-7bbbaa.netlify.app"
        target="_blank"
        >https://transcendent-cendol-7bbbaa.netlify.app</a
      >
    </div>
    <div class="modal_link-box">
      <p class="link-title">레파지토리</p>
      <a
        class="modal_link"
        href="https://github.com/MrJinkyu/OTT-site"
        target="_blank"
        >https://github.com/MrJinkyu/OTT-site</a
      >
    </div>
  </div>
  <div class="modal_right-box">
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">프로젝트 소개</h5>
      <p class="box-title_content">
        실제 Youtube open api를 활용하여 만든 OTT 사이트입니다.
      </p>
      <p class="box-title_content">
        최신 영화나 스포츠, 애니메이션 등의 리뷰 영상을 장르 별로
        분류하였고, 실제 OTT 사이트처럼 프리뷰를 통해 선택한 영상을 미리볼
        수 있도록 구현하였습니다.
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">배운점</h5>
      <p class="box-title_content">
        요청 횟수 제한이 있는 youtube open api의 특성 때문에 개발
        단계에서는 실제 API에 의존하지 않고 모의 데이터(Mock Data)를
        사용하여 빠르게 개발하고 테스트할 수 있었습니다. 이를 위해 Mock
        Data를 사용하는 로직과 실제 API와 통신하는 로직을 분리하여
        클래스로 만들어 의존성 주입을 통해 더 효율적으로 관리하였습니다.
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">구현 기능</h5>
      <p class="box-title_content">
        카테고리 별 비디오 보여주기, 선택한 영상 프리뷰, 상세 페이지에서
        비디오 재생
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">기술 스택</h5>
      <p class="box-title_content">
        Youtube api, React, React slick, React Router, React Query
      </p>
    </div>
  </div>`;
}

function createMbtiContent() {
  return `
  <i class="fa-solid fa-xmark modal_close-btn" data-name="close"></i>
  <div class="modal_left-box">
    <img
      src="/images/mbti.png"
      alt="mbti project image"
      class="modal-img"
    />
    <h4 class="modal_title">
      MBTI 포털 서비스<span class="modal_category">Team project</span>
    </h4>
    <div class="modal_link-box">
      <p class="link-title">배포링크</p>
      <a
        class="modal_link"
        href="https://are-you-t.vercel.app/"
        target="_blank"
        >https://are-you-t.vercel.app/</a
      >
    </div>
    <div class="modal_link-box">
      <p class="link-title">레파지토리</p>
      <a
        class="modal_link"
        href="https://github.com/are-you-T/client"
        target="_blank"
        >https://github.com/are-you-T/client</a
      >
    </div>
  </div>
  <div class="modal_right-box">
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">프로젝트 소개</h5>
      <p class="box-title_content">
        사용자들이 자신의 성격 유형을 이해하고, 다른 유형의 사람들과
        상호작용을 통해 이해할 수 있는 기회를 제공하는 MBTI 포털
        서비스입니다.
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">배운점</h5>
      <p class="box-title_content">
        팀 프로젝트를 통해 TypeScript, Tailwind CSS, 그리고 Styled
        Components와 같은 새로운 기술 스택을 사용해보았고, Discord 음성
        채팅방을 활용하여 팀원들과 실시간으로 문제 상황을 공유하고 함께
        해결 방법을 논의하며 문제를 해결하는 과정을 통해 협업 능력을
        키웠습니다.
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">담당 기능</h5>
      <p class="box-title_content">
        테스트 결과 페이지: 유형 별 컬러 매칭, 결과 데이터 시각화, 결과
        페이지 공유
      </p>
    </div>
    <div class="right-box_content-wrap">
      <h5 class="modal_right_box-title">클라이언트 기술 스택</h5>
      <p class="box-title_content">
        Tailwind CSS, Tailwind-styled-component, React, TypeScript
      </p>
    </div>
  </div>`;
}
