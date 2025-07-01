import { Url } from "../models/Url.js";
import shortid from "shortid";

export const shortUrl = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();

  const shortUrl = `http://localhost:3000/${shortCode}`;

  const newUrl = new Url({
    shortCode: shortCode,
    longUrl: longUrl,
  });
  await newUrl.save();

  console.log("New URL saved:", newUrl);
  res.render("index.ejs", {
    shortUrl: shortUrl,
  });

  // newUrl
  //   .save()
  //   .then(() => {
  //     res.render("index.ejs", {
  //       shortUrl: `http://localhost:3000/${shortCode}`,
  //     });
  //   })
  //   .catch((err) => {
  //     console.error("Error saving URL:", err);
  //     res.status(500).send("Internal Server Error");
  //   });
};

export const orginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;

  try {
    // Find the URL by shortCode ON DB
    const orginalUrl = await Url.findOne({ shortCode: shortCode });

    if (!orginalUrl) {
      return res.status(404).send("URL not found");
    }

    res.redirect(orginalUrl.longUrl);
  } catch (err) {
    console.error("Error retrieving URL:", err);
    res.status(500).send("Internal Server Error");
  }
};
