(function () {
  const form = document.getElementById("orderForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const details = (fd.get("details") || "").toString().trim();

    const subject = encodeURIComponent("EarnAI Order — Package Request");
    const body = encodeURIComponent(
`Hello GNAIAAAC LLC,

My name: ${name}
My email: ${email}

I want to order:
- EarnAI Shorts Script Package (Basic / Standard / Pro)

Details:
${details}

Delivery expectation:
- 48 hours (as stated on the site)

Thank you.
`
    );

    window.location.href = `mailto:ssgpt6@aol.com?subject=${subject}&body=${body}`;
  });
})();