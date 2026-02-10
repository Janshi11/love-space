/* FLOATING BACKGROUND */
const symbols = ["❤️","🌸","✨","🎀"];
const bg = document.getElementById("floatingBg");

for (let i = 0; i < 40; i++) {
  const s = document.createElement("div");
  s.className = "float";
  s.innerText = symbols[Math.floor(Math.random()*symbols.length)];
  s.style.left = Math.random()*100+"vw";
  s.style.fontSize = 14 + Math.random()*18+"px";
  s.style.animationDuration = 10 + Math.random()*12+"s";
  bg.appendChild(s);
}

/* NAV */
function goToPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page"+n).classList.add("active");
}

/* PAGE 2 */
const page2Texts=["We started as enemies and became friends before love found us.",
  "It began with a simple Instagram request and a quiet “hi” at dawn.",
  "During lockdown, while the world slowed, we grew closer through endless chats.",
  "Senior and junior, we learned to care, listen, and obey each other’s words.",
  "Every morning started with us—and somehow, it still does."];

let p2 = 0;

function showPage2Reason() {
  if (p2 >= page2Texts.length) return;

  // show text
  const d = document.createElement("div");
  d.innerText = page2Texts[p2];
  d.style.position = "relative";
  page2Reasons.appendChild(d);

  // heart burst animation
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.innerText = ["💞","🎀"];
    heart.style.left = Math.random() * 80 + "%";
    heart.style.bottom = "0";
    d.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }

  p2++;

  // 🔥 IMPORTANT: show NEXT after last reason
  if (p2 === page2Texts.length) {
    document.getElementById("continueBtn").style.display = "none";
    document.getElementById("page2Next").style.display = "inline-block";
  }
}






function openEnvelope(title, text, img = "", showNext = false) {

  // 🔊 play sound on every click
  const pop = document.getElementById("popSound");
  if (pop) {
    pop.currentTime = 0;
    pop.play();
  }

  cardTitle.innerText = title;
  cardText.innerText = text;

  cardImg.style.display = img ? "block" : "none";
  if (img) cardImg.src = img;

  cardNextBtn.style.display = showNext ? "block" : "none";

  cardModal.style.display = "flex";
  const env = document.querySelector(".envelope");
  env.classList.remove("open", "valentine");

  setTimeout(() => env.classList.add("open"), 100);
}

function closeEnvelope(){
  cardModal.style.display="none";
  document.querySelector(".envelope").classList.remove("open","valentine");
}

/* GIFTS */
function openGift(text) {
  event.currentTarget.classList.add("open");
  playSound("popSound");
  setTimeout(() => {
    openEnvelope("I PROMISE YOU 🫂  that", text);
  }, 500);
}


function yesNext() {
  const nextSound = document.getElementById("nextSound");
  if (nextSound) {
    nextSound.currentTime = 0;
    nextSound.play();
  }

  // small delay so sound is heard
  setTimeout(() => {
    document.getElementById("yesCard").classList.add("hidden");
    goToPage(6);
  }, 300);
}







/* VALENTINE YES – FINAL FIX */
function valentineYes() {
  // close NO modal if open
  const imageModal = document.getElementById("imageModal");
  imageModal.style.display = "none";

  // sound
  const yes = document.getElementById("yesSound");
  if (yes) {
    yes.currentTime = 0;
    yes.play();
  }

  // show YES card ONLY (no envelope)
  document.getElementById("yesCard").classList.remove("hidden");
}

function valentineNo() {
  console.log("NO clicked");

  // sound
  const noSound = document.getElementById("noSound");
  if (noSound) {
    noSound.currentTime = 0;
    noSound.play();
  }

  // hide YES card if open
  document.getElementById("yesCard").classList.add("hidden");

  // show NO card
  document.getElementById("noCard").classList.remove("hidden");
}
function closeNoCard() {
  document.getElementById("noCard").classList.add("hidden");
}




// imageModal.onclick=()=>imageModal.style.display="none";

function closeYesCard() {
  document.getElementById("yesCard").classList.add("hidden");
}

function goNext() {
  document.getElementById("yesCard").classList.add("hidden");
  goToPage(6); // LOVE LETTER page
}



function openLoveLetter() {
  const nextSound = document.getElementById("nextSound");
  if (nextSound) {
    nextSound.currentTime = 0;
    nextSound.play();
  }

  setTimeout(() => {
    document.getElementById("loveLetterModal").style.display = "flex";
  }, 200);
}


function closeLoveLetter() {
  document.getElementById("loveLetterModal").style.display = "none";
}



function playSound(id) {
  const sound = document.getElementById(id);
  if (!sound) return;

  sound.currentTime = 0;
  sound.play().catch(() => {
    // browser blocked — ignore silently
  });
}

// Gift opening animation
document.querySelectorAll(".gift").forEach(gift => {
  gift.addEventListener("click", () => {
    gift.classList.add("open");
    burstHearts(gift);

    setTimeout(() => {
      gift.classList.remove("open");
    }, 900);
  });
});

// Heart burst
function burstHearts(el) {
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "14px";
    heart.style.transform = `translate(-50%, -50%) translate(${Math.random()*60-30}px, ${Math.random()*-60}px)`;
    heart.style.opacity = "1";
    heart.style.transition = "all .8s ease";

    el.appendChild(heart);

    setTimeout(() => {
      heart.style.opacity = "0";
      heart.style.transform += " translateY(-40px)";
    }, 50);

    setTimeout(() => heart.remove(), 800);
  }
}
function openGiftWithAnimation(text) {
  const gift = event.currentTarget;

  // prevent double click
  if (gift.classList.contains("open")) return;

  gift.classList.add("open");

  // play pop sound
  const pop = document.getElementById("popSound");
  if (pop) {
    pop.currentTime = 0;
    pop.play();
  }

  // after animation → open envelope
  setTimeout(() => {
    openEnvelope("YOU ARE MY SAFE PLACE 🫂", text);
  }, 700);
}
