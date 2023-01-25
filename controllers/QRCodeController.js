import qr from "qr-image";

export const createQR = (req, res) => {
  const supportedFormats = ["png", "svg", "eps", "pdf"];
  const supportedResponseTypes = ["b64", "media"];

  if (
    req?.query?.qrFormat &&
    !supportedFormats.includes(req?.query?.qrFormat)
  ) {
    res.status(400).json({ error: "Not Supported Format." });
    return;
  }
  if (
    req?.query?.responseType &&
    !supportedResponseTypes.includes(req?.query?.responseType)
  ) {
    res.status(400).json({ error: "Not Supported Response Type." });
    return;
  }
  const data = req.query.data;
  let responseType = supportedResponseTypes.find(
    (type) => type == req.query.responseType
  );
  if (!responseType) {
    responseType = "b64";
  }
  let imageFormat = supportedFormats.find((type) => type == req.query.qrFormat);
  if (!imageFormat) {
    imageFormat = "png";
  }

  //qr code generation for texts or urls
  if (data) {
    if (data !== "") {
      if (responseType && responseType !== "") {
        if (imageFormat && imageFormat !== "") {
          const qr_svg = qr.image(data, { type: imageFormat });

          if (responseType == "media") {
            if (imageFormat !== "pdf") {
              res.setHeader(
                "Content-Disposition",
                `attachment; filename=qr.${imageFormat}`
              );
              res.type(`image/${imageFormat}`);
              qr_svg.pipe(res);
            } else {
              res.setHeader(
                "Content-Disposition",
                "attachment; filename=qr.pdf"
              );

              res.type(`application/${imageFormat}`);
              qr_svg.pipe(res);
            }
          } else {
            const chunks = [];
            qr_svg.on("data", (chunk) => {
              chunks.push(chunk);
            });
            qr_svg.on("end", () => {
              const buffer = Buffer.concat(chunks);
              const image = buffer.toString("base64");
              res.status(200).json({ image });
            });
          }
        }
      }
    } else {
      res.status(400).json({
        error: "Please provide any data (text,url etc) to create qr.",
      });
    }
  } else {
    res.status(400).json({
      error: "No Parameters.",
    });
  }
};
