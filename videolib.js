
const videoLinks = [
  "https://www.youtube.com/watch?v=9cOgEm4hJdY",
  "https://www.youtube.com/watch?v=SpK7ywF1DTQ",
  "https://www.youtube.com/watch?v=haP_brr_rf0",
  "https://www.youtube.com/watch?v=QQBYG2z2aYg",
  "https://www.youtube.com/watch?v=4hMCaMxylac",
  "https://www.youtube.com/watch?v=0bsy47-dwJw",
  "https://www.youtube.com/watch?v=a7gURT89OF",
  "https://www.youtube.com/watch?v=1hnfIgmgXVU",
  "https://www.youtube.com/watch?v=UOVSdl1qADs",
  "https://www.youtube.com/watch?v=KT7q5v15LX0",
  "https://www.youtube.com/watch?v=NsNVckfFVjg",
  "https://www.youtube.com/watch?v=pdPmxAhhO1Q",
  "https://www.youtube.com/watch?v=qTeVdDCy0cw",
  "https://www.youtube.com/watch?v=x1LjnogeEms",
  "https://www.youtube.com/watch?v=NvzrV8NHRDo",
  "https://www.youtube.com/watch?v=Ub9XB5dgDsY",
  "https://www.youtube.com/watch?v=CtXw6O2abJY",
  "https://www.youtube.com/watch?v=mO4QH-nhWeA",
  "https://www.youtube.com/watch?v=QQBYG2z2aYg",
  "https://www.youtube.com/watch?v=IpzraqSEXsI",
  "https://www.youtube.com/watch?v=MV8o87CA8_Q",
  "https://www.youtube.com/watch?v=6rlvAKgUdnM",
  "https://www.youtube.com/watch?v=IfUF_a0HCHA",
  "https://www.youtube.com/watch?v=-pAf9sVqzh4",
  "https://www.youtube.com/watch?v=JGncXiNNeRQ",
  "https://www.youtube.com/watch?v=E4h3FZgqTro",
  "https://www.youtube.com/watch?v=6XaaNsrjd_0",
  "https://www.youtube.com/watch?v=Zwrz-pX5UHI",
  "https://www.youtube.com/watch?v=MH4Dznjq_pI",
  "https://www.youtube.com/watch?v=BUcjmNd4Fi0",
  "https://www.youtube.com/watch?v=W4Y0CneyIkg",
  "https://www.youtube.com/watch?v=-v2vdRK6Hfo",
  "https://www.youtube.com/watch?v=eOsolEqrmEE",
  "https://www.youtube.com/watch?v=TVKtMAypq_k",
  "https://www.youtube.com/watch?v=G3S8oqCI05Y",
  "https://www.youtube.com/watch?v=OVKJT4yUgnE",
  "https://www.youtube.com/watch?v=FOsrMPIXURQ",
  "https://www.youtube.com/watch?v=SXP50Z7w72E",
  "https://www.youtube.com/watch?v=jOVsS2B2ioo",
  "https://www.youtube.com/watch?v=v8CgR2UmvAU",
  "https://www.youtube.com/watch?v=7xnxSl8JsA0",
  "https://www.youtube.com/watch?v=tjCg7C1UAF8",
  "https://www.youtube.com/watch?v=8v4fDAiWyU0",
  "https://www.youtube.com/watch?v=Pu1jE0v1u5A",
  "https://www.youtube.com/watch?v=EmmAWKue9iY",
  "https://www.youtube.com/watch?v=nUEZPSNrdQ8",
  "https://www.youtube.com/watch?v=smWLaq7GVEk",
  "https://www.youtube.com/watch?v=_v3dxgRcz5c",
  "https://www.youtube.com/watch?v=NWgzghiVeho",
  "https://www.youtube.com/watch?v=VU7SdCsOx0I",
  "https://www.youtube.com/watch?v=gIZYNpk6bPk",
  "https://www.youtube.com/watch?v=ELj2MmJj1nk",
  "https://www.youtube.com/watch?v=L4rafDYoZs8",
  "https://www.youtube.com/watch?v=dkKQxDbEdls"
];

function loadVideoLinks() {
  
  const listElement = document.getElementById('videoList');
  listElement.innerHTML = ''; // Clear existing list

  videoLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link;
    a.textContent = link;
    a.target = "_blank"; // Open in new tab
    li.appendChild(a);
    listElement.appendChild(li);
  });
}
      