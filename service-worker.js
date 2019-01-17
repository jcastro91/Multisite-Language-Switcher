/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e8eb1453fe48bc862b9867aa2152d716"
  },
  {
    "url": "advanced-settings.png",
    "revision": "a9bbfb730315784ab305f5ae4b86dc06"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.AttachmentPathFinder.html",
    "revision": "804b3a5026b9c5ae73511e028d4fbb58"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ContentImporter.html",
    "revision": "13bd88f345881e756f6a040067a28be7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportCoordinates.html",
    "revision": "fe42e00253a387df826701f13a2779f0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Attachments.Linking.html",
    "revision": "04b73809275a91bb0ff1142a28f27aec"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.AttachmentsImporters.html",
    "revision": "40466bd93ebf555df138949cea9c8e93"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.BaseImporter.html",
    "revision": "bf788be73a02be11ec759a04b610eacb"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Importer.html",
    "revision": "049165396248a7a3f737dcc293ab8912"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "dc8bb71c07be2f962781a0cb6dfec05e"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.ImportersFactory.html",
    "revision": "86d529f2f8cb1f8aef76a9f5640f6096"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Map.html",
    "revision": "f0eca7b4d4e5a858463fed2c34dc27d7"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "5e90d6110a0f2028308af2ec32522b54"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostFieldsImporters.html",
    "revision": "bcc1a88042f0de59865207202911a376"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "2c46eb13f419ef1b1c6827def8d50f58"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostMetaImporters.html",
    "revision": "0d7a1bee7c81f3ecd1dbe9ff2cf4b142"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "d99fbda79aff38c5db0ab8e8b83042c8"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "d55851dd518cb15077c06b312a479583"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "a70c58715e55971bb4a35f6e6f3bbfe0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Importers.TermsImporters.html",
    "revision": "eb18cf55397f5b7d291e16eea9a6f210"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.ImportLogger.html",
    "revision": "a1d34ba7c0fed3783b915a72994a76a4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "453d30a8e970e442c268161f04506206"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.LogWriters.LogWriter.html",
    "revision": "725602760f9871c2d4b54519f158b5c0"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.MetaBox.html",
    "revision": "4355a63d662ffb28a2d7abf978b4b9ca"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Relations.html",
    "revision": "d0d61b63e8be736d9ee08d7cab4a0fef"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.ContentImport.Service.html",
    "revision": "4576a7f5a0f59e7fece0352e3492b898"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdmin.html",
    "revision": "228f4cf7b049f0fac214105a88d5f1db"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIcon.html",
    "revision": "9640e5a3c8ffe082b3dfe41c07338377"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsAdminIconTaxonomy.html",
    "revision": "f3b702064b2ab58be849a8235e9f0ad3"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlog.html",
    "revision": "faf1b2dd912f975f3816f573cdc1a528"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsBlogCollection.html",
    "revision": "1eeedf86fd66c1281d76aad19d57f909"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsContentTypes.html",
    "revision": "149d615fb9375de0555c32c905e0d1ae"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumn.html",
    "revision": "d874913e9becd92c4eda94dfd4948a01"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomColumnTaxonomy.html",
    "revision": "9fc251f152aed4fcff9c94bd3dcdd003"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsCustomFilter.html",
    "revision": "3cc30f24e87b78d1a6a9d4207601d70b"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsGetSet.html",
    "revision": "be685bb303b8a8d34ec34cb13cb5e381"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsJson.html",
    "revision": "839f35f2f799ed7d0f27f800feecbdc6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLanguageArray.html",
    "revision": "69d6095ba6e56e995417930eb86d618c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLink.html",
    "revision": "c9135df59bb858c8572d52ef5025552f"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkImageOnly.html",
    "revision": "3d9c6b9acef2691e3813d33b5632e9f4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextImage.html",
    "revision": "c724c98243d58e679890903822bd5109"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsLinkTextOnly.html",
    "revision": "c538508fbc41350d6a726d3c72643338"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMain.html",
    "revision": "4ee522b1137e00ac5d060e8d7c23e814"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsMetaBox.html",
    "revision": "fbbd990bd2e37ba15fc3d507cde029d5"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptions.html",
    "revision": "506da773a5f9698eed7064b1d0452a00"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsPost.html",
    "revision": "68471ddba6b04c3778604b98c0cb04ad"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQuery.html",
    "revision": "d8e30de9c94069c54d16932a7128398a"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryAuthor.html",
    "revision": "82d20969064e4bd6f953fd6f4aa5e9e6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryDay.html",
    "revision": "8e308b620d4696387211dd6bcea27ef4"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryMonth.html",
    "revision": "b1ca6a9c68668414091a89182baf6ba3"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryPostType.html",
    "revision": "ed31eda06600909e30851811432fd20c"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsQueryYear.html",
    "revision": "e97cbb507f48590d6cdd793869437c04"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTax.html",
    "revision": "d5ea22f670c752838f44ac50c93dd30d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTerm.html",
    "revision": "81c26f9f6bee356c30154b3d51f19a3e"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOptionsTaxTermCategory.html",
    "revision": "ec22478f3f71fa65ac240efd04397e64"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsOutput.html",
    "revision": "144879041a25383ee62cfad65fdbd228"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPlugin.html",
    "revision": "924b37f7b04778d9c49b8b15796c1abc"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTag.html",
    "revision": "23f674728175e055330c7e3e03dede3d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostTagClassic.html",
    "revision": "55b052d224f1872914746ff3c78d63b6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsPostType.html",
    "revision": "0199b0b48828dfbe7bc214c066dd83c6"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistry.html",
    "revision": "73607680a2a12b37d36908ea40a0a34d"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsRegistryInstance.html",
    "revision": "08d4ae2872172db73042083baeeea476"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsSqlCacher.html",
    "revision": "9acdbfb5efad908aca384bd0424a23e1"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsTaxonomy.html",
    "revision": "48d4affdd53c49cd7c97c10536db6051"
  },
  {
    "url": "api-documentation/classes/lloc.Msls.MslsWidget.html",
    "revision": "b2e15ab33ea43186d6322f37a0248cc2"
  },
  {
    "url": "api-documentation/css/bootstrap-combined.no-icons.min.css",
    "revision": "3f13279317ad7da1178553ff245ab56d"
  },
  {
    "url": "api-documentation/css/font-awesome.min.css",
    "revision": "7fbe76cdac6093784895bb4989203e5a"
  },
  {
    "url": "api-documentation/css/jquery.iviewer.css",
    "revision": "d20200e0756e987d27f500e3bdfbf9ce"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.dev.svg",
    "revision": "ed8e764380d8299157971ca67649cb18"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.eot",
    "revision": "da18d5fd73abdf146f8c87456036816c"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.svg",
    "revision": "777ef8255044405de75d1e3737aaee21"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.ttf",
    "revision": "71e82562f326128febbd76f851aa98df"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/fonts/phpdocumentor-clean-icons.woff",
    "revision": "e00348037b5d4433d0ecac450c15d22e"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/lte-ie7.js",
    "revision": "ee536c1e7557c04c8d49623c49b37dfa"
  },
  {
    "url": "api-documentation/css/phpdocumentor-clean-icons/style.css",
    "revision": "821bf9f8aada8f5965b5604cfa70c383"
  },
  {
    "url": "api-documentation/css/prism.css",
    "revision": "3c9bc5860787973d163251bd381b404d"
  },
  {
    "url": "api-documentation/css/template.css",
    "revision": "7465b0a3a1f21a853ace06b5de96b2c1"
  },
  {
    "url": "api-documentation/files/ContentImport.AttachmentPathFinder.html",
    "revision": "5220f8ca98acb1c7fe24fb758a409473"
  },
  {
    "url": "api-documentation/files/ContentImport.ContentImporter.html",
    "revision": "6921dfd1fa5350a25fab20ea7403c255"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportCoordinates.html",
    "revision": "4469a00c977bab167fdf43dcfa8a3bec"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Attachments.Linking.html",
    "revision": "b71bfc0a17d6d56bb002e496e6a2ee38"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.AttachmentsImporters.html",
    "revision": "f56bb488dcfb709954af5df4f1c55f0d"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.BaseImporter.html",
    "revision": "169fab0a5db5b27e97254a6ed8c7967d"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Importer.html",
    "revision": "67cd3430b61da47ee792f996a54f0758"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersBaseFactory.html",
    "revision": "10dd07199105e15ddb7e8e7a1337139a"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.ImportersFactory.html",
    "revision": "f86d414e9b51fc013cc7a06478f9f412"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Map.html",
    "revision": "01716f24321761b78da503fa43e5e7ea"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFields.Duplicating.html",
    "revision": "4d2e46082199957b91c0331fdddd7f86"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostFieldsImporters.html",
    "revision": "4b7879fe8623c3f9c5afb5b8fe8d3586"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMeta.Duplicating.html",
    "revision": "745426983b4ef2239dabeb7feba3b181"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostMetaImporters.html",
    "revision": "401549ad4863d43443e5a434ea659ea0"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnail.Linking.html",
    "revision": "d326892bb1dd50c5d14b7170f6ba31d2"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.PostThumbnailImporters.html",
    "revision": "eda65b06b642656d2030a38a4f6316fe"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.Terms.ShallowDuplicating.html",
    "revision": "8ab8b8c0bbb658bf13e0449f101feb01"
  },
  {
    "url": "api-documentation/files/ContentImport.Importers.TermsImporters.html",
    "revision": "46b87209b01101461350b95652cfa4b7"
  },
  {
    "url": "api-documentation/files/ContentImport.ImportLogger.html",
    "revision": "ec68479653693c257f9ea1d1f1a6f41a"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.AdminNoticeLogger.html",
    "revision": "f00661e2578ea90b43cb01267c3021b0"
  },
  {
    "url": "api-documentation/files/ContentImport.LogWriters.LogWriter.html",
    "revision": "8a40bc45d28cb296b35d6b66afc6bd10"
  },
  {
    "url": "api-documentation/files/ContentImport.MetaBox.html",
    "revision": "c3ec96871f3ce3bf155352d53dff53dc"
  },
  {
    "url": "api-documentation/files/ContentImport.Relations.html",
    "revision": "eb4657056973ddc86484a52c5e01db4b"
  },
  {
    "url": "api-documentation/files/ContentImport.Service.html",
    "revision": "dae4927ebd0016415b55304c4ab0a6a6"
  },
  {
    "url": "api-documentation/files/index.html",
    "revision": "302af9f0a7b23f05112b856011d600a9"
  },
  {
    "url": "api-documentation/files/MslsAdmin.html",
    "revision": "5ac77305d78a9120ac828bf89e6d1b57"
  },
  {
    "url": "api-documentation/files/MslsAdminIcon.html",
    "revision": "e03546cef158c695f984763f76121eaa"
  },
  {
    "url": "api-documentation/files/MslsAdminIconTaxonomy.html",
    "revision": "8c5f4442f3984a71c75ec3bc957dff7d"
  },
  {
    "url": "api-documentation/files/MslsBlog.html",
    "revision": "cb8db63bebdce0966f151acebbc68cd8"
  },
  {
    "url": "api-documentation/files/MslsBlogCollection.html",
    "revision": "9123b9db55f561f716aa7bd856d2341f"
  },
  {
    "url": "api-documentation/files/MslsContentTypes.html",
    "revision": "4787992504562f986a01ab4a101640fa"
  },
  {
    "url": "api-documentation/files/MslsCustomColumn.html",
    "revision": "4e7450ccab259612384fd0b85d9ee598"
  },
  {
    "url": "api-documentation/files/MslsCustomColumnTaxonomy.html",
    "revision": "c090bdaffa8405492ff119714aaa587f"
  },
  {
    "url": "api-documentation/files/MslsCustomFilter.html",
    "revision": "6f63e7626b6e637f859c02df4eda8538"
  },
  {
    "url": "api-documentation/files/MslsGetSet.html",
    "revision": "87cb9d33d5001745e5afa11a1bd435b7"
  },
  {
    "url": "api-documentation/files/MslsJson.html",
    "revision": "9bd148ab0799732d7f006065c23289f1"
  },
  {
    "url": "api-documentation/files/MslsLanguageArray.html",
    "revision": "b9f3c324d1e72d1f9bb66c25e3123e73"
  },
  {
    "url": "api-documentation/files/MslsLink.html",
    "revision": "694a5df6e3a67e78bea609ec220b0ce1"
  },
  {
    "url": "api-documentation/files/MslsLinkImageOnly.html",
    "revision": "f777ef55aade9464d0a20a4a3e36e52c"
  },
  {
    "url": "api-documentation/files/MslsLinkTextImage.html",
    "revision": "acb49eda4c58a615024a8283001b2073"
  },
  {
    "url": "api-documentation/files/MslsLinkTextOnly.html",
    "revision": "8829fba27ca7e01ccbe24e53659e04e6"
  },
  {
    "url": "api-documentation/files/MslsMain.html",
    "revision": "9541d5b2e997aae81f8c38824a87c329"
  },
  {
    "url": "api-documentation/files/MslsMetaBox.html",
    "revision": "610274d36567995908017dd11edfdb76"
  },
  {
    "url": "api-documentation/files/MslsOptions.html",
    "revision": "a8017c0a6e43aa1f91fe1bee47d6005b"
  },
  {
    "url": "api-documentation/files/MslsOptionsPost.html",
    "revision": "19c567a5c631e309249be0457e1cd1c3"
  },
  {
    "url": "api-documentation/files/MslsOptionsQuery.html",
    "revision": "1d02e5a0c1241160284f2f377fa49742"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryAuthor.html",
    "revision": "1df0d8f6a15cac6d3f3e629732ff0c65"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryDay.html",
    "revision": "2ac03c1324ec2c20f23190783697634d"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryMonth.html",
    "revision": "0f463072b8e28a98b91264e1b93da1b4"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryPostType.html",
    "revision": "0b4f53212608023dc11a33c083ab475e"
  },
  {
    "url": "api-documentation/files/MslsOptionsQueryYear.html",
    "revision": "b51700faeeaae30f864badd713858fe6"
  },
  {
    "url": "api-documentation/files/MslsOptionsTax.html",
    "revision": "7641755161e7a69f350d5d7cdc526af1"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTerm.html",
    "revision": "1706230346b8d49ac0b1c1338903cf58"
  },
  {
    "url": "api-documentation/files/MslsOptionsTaxTermCategory.html",
    "revision": "de746a0b9dd847eb0c2dfd7d9bb0becb"
  },
  {
    "url": "api-documentation/files/MslsOutput.html",
    "revision": "bf1658c5ad0f7e63ea8182620465377c"
  },
  {
    "url": "api-documentation/files/MslsPlugin.html",
    "revision": "78db707295e8b827646869b64a2afe7a"
  },
  {
    "url": "api-documentation/files/MslsPostTag.html",
    "revision": "f549a5e1878240511eb69d2d5d9c0b62"
  },
  {
    "url": "api-documentation/files/MslsPostTagClassic.html",
    "revision": "003a8b63e07148eb991abbad72963a65"
  },
  {
    "url": "api-documentation/files/MslsPostType.html",
    "revision": "61b1b1f85a9e3c2de25a55f18493314f"
  },
  {
    "url": "api-documentation/files/MslsRegistry.html",
    "revision": "ca81d3b6f7f8309715d996353ca33810"
  },
  {
    "url": "api-documentation/files/MslsRegistryInstance.html",
    "revision": "67e65da72c5d276103b717b92556810f"
  },
  {
    "url": "api-documentation/files/MslsSqlCacher.html",
    "revision": "5a0108744e9b03cffa61d0d823a56321"
  },
  {
    "url": "api-documentation/files/MslsTaxonomy.html",
    "revision": "036678dbef8d69b9bc3b37b832820c28"
  },
  {
    "url": "api-documentation/files/MslsWidget.html",
    "revision": "232349aaca888ec3f096da2898e93b5e"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.eot",
    "revision": "90186830c9c50a0fed932494581761d9"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.svg",
    "revision": "776d58f453c8fe5d6a89e9c31ee223ff"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.ttf",
    "revision": "4f0022f25672c7f501c339cbf98d9117"
  },
  {
    "url": "api-documentation/font/fontawesome-webfont.woff",
    "revision": "fdf491ce5ff5b2da02708cd0e9864719"
  },
  {
    "url": "api-documentation/font/FontAwesome.otf",
    "revision": "3b15120c304688379525c9f3c15cc4c2"
  },
  {
    "url": "api-documentation/graphs/class.html",
    "revision": "1a5c780dbd948f2c8925add0658fafb5"
  },
  {
    "url": "api-documentation/graphs/classes.svg",
    "revision": "926f2a158939b442e262af5c4471b68c"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-114x114.png",
    "revision": "a88f04df36a78d3a481211ce21ce0e60"
  },
  {
    "url": "api-documentation/images/apple-touch-icon-72x72.png",
    "revision": "5a7e1222cab85b4cec71aed67ff637ac"
  },
  {
    "url": "api-documentation/images/apple-touch-icon.png",
    "revision": "7bad7e9b405020e6e59caba1f6009ae0"
  },
  {
    "url": "api-documentation/images/custom-icons.svg",
    "revision": "35e786d557046ba93192e47d0999b29f"
  },
  {
    "url": "api-documentation/images/hierarchy-item.png",
    "revision": "0a0859d151d06e7bb05c33e08935f6b9"
  },
  {
    "url": "api-documentation/images/icon-class-13x13.png",
    "revision": "90fdd04cf8cc989932b69f381ca90c5d"
  },
  {
    "url": "api-documentation/images/icon-class.svg",
    "revision": "6399d8f77dac3f973d15c900fdbe68dd"
  },
  {
    "url": "api-documentation/images/icon-interface-13x13.png",
    "revision": "7a178646801f9087f1de9d5406cbc823"
  },
  {
    "url": "api-documentation/images/icon-interface.svg",
    "revision": "249deb62bdbd723a9f212d6de8363753"
  },
  {
    "url": "api-documentation/images/icon-trait-13x13.png",
    "revision": "0efd7bd5f682ad9469f73fb20a1101a0"
  },
  {
    "url": "api-documentation/images/icon-trait.svg",
    "revision": "c56a25b9b5b096f8133f41ff8c367341"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_left.png",
    "revision": "76f2b0ced5a3a64aae4179d13874787b"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.rotate_right.png",
    "revision": "3acdbd5dece2e19ed13a693ad3c92098"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_fit.png",
    "revision": "2a6f0d6f6619f7f68d0be0b8f4976355"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_in.png",
    "revision": "37c857d20554941ac14fbe9a9d25715e"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_out.png",
    "revision": "5aa2c0b6f696389c6f25123396bf1c42"
  },
  {
    "url": "api-documentation/images/iviewer/iviewer.zoom_zero.png",
    "revision": "184693b7dc7cd7d201188458ec209b61"
  },
  {
    "url": "api-documentation/index.html",
    "revision": "62165ef69cba85ffdc79b08ad14f6dee"
  },
  {
    "url": "api-documentation/js/bootstrap.min.js",
    "revision": "be1c5898c4332c8e7f9906011e005bb0"
  },
  {
    "url": "api-documentation/js/html5.js",
    "revision": "0ce8f355891c26c28f057e195e97dcd5"
  },
  {
    "url": "api-documentation/js/jquery-1.11.0.min.js",
    "revision": "8fc25e27d42774aeae6edbc0a18b72aa"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.js",
    "revision": "46034235be90f7905b86d65d7818457c"
  },
  {
    "url": "api-documentation/js/jquery.dotdotdot-1.5.9.min.js",
    "revision": "d4bc241987ae345461c3dd53651f7b98"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.js",
    "revision": "d232f5c7145ad91268854b0f413a2bf2"
  },
  {
    "url": "api-documentation/js/jquery.iviewer.min.js",
    "revision": "75a69290d4ad6533cd63b06ab859fecc"
  },
  {
    "url": "api-documentation/js/jquery.mousewheel.js",
    "revision": "6e0c8755583bd92cd20f4fb1ffe984f6"
  },
  {
    "url": "api-documentation/js/jquery.smooth-scroll.js",
    "revision": "adb720781feba8c000f1d6e2ef2fee0f"
  },
  {
    "url": "api-documentation/js/prism.min.js",
    "revision": "7999e842de1cb54713abed7aa2edb8e1"
  },
  {
    "url": "api-documentation/js/ui/1.10.4/jquery-ui.min.js",
    "revision": "a631873e0f4be6f476465b7c2ad35745"
  },
  {
    "url": "api-documentation/namespaces/default.html",
    "revision": "1a206d510552d8d17b9781d6aa3dcaf4"
  },
  {
    "url": "api-documentation/namespaces/lloc.html",
    "revision": "106cf08d72c260a1f1ca95a6d7bc3290"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.html",
    "revision": "d4e7ddf3d33d333b4236af6a931cf2c2"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Attachments.html",
    "revision": "8b11005c5957285f4b16592645762b46"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.html",
    "revision": "ab0ab725fc00be1d9020f1197d5a5a83"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostFields.html",
    "revision": "635df824879c447e8417171139edcc08"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostMeta.html",
    "revision": "3f1a8c17ca30c68c83c9b56770f252a2"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.PostThumbnail.html",
    "revision": "45f8868574f793894ada89ce200fa8ff"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.Importers.Terms.html",
    "revision": "d4f2a21cab2b2992e37d3d022d102937"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.ContentImport.LogWriters.html",
    "revision": "452ad5b38abf33da627eadd2853fff1c"
  },
  {
    "url": "api-documentation/namespaces/lloc.Msls.html",
    "revision": "78fcba3b2cdbcd821685c8a6a5687755"
  },
  {
    "url": "api-documentation/reports/deprecated.html",
    "revision": "5ee1deb59262e95e2e81b375786a25c0"
  },
  {
    "url": "api-documentation/reports/errors.html",
    "revision": "6fc6ab61ad6771fb02edc4cb50507197"
  },
  {
    "url": "api-documentation/reports/markers.html",
    "revision": "8472b206163e3b781f20639d88a74525"
  },
  {
    "url": "appendices/acknowledgment.html",
    "revision": "d02bb2b44ef26a5e2d493284ded2a8b9"
  },
  {
    "url": "appendices/faq.html",
    "revision": "465bcf200fafee30b2d93d69dd9d4873"
  },
  {
    "url": "appendices/help-donations.html",
    "revision": "fd08c4d1b78bda4aa129baa559990a79"
  },
  {
    "url": "appendices/license.html",
    "revision": "e7b18880d0932df4d3b05e374d1ee11e"
  },
  {
    "url": "assets/css/0.styles.7605b712.css",
    "revision": "59e007b312dd70610323d7cc2abd850e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.df4e6c23.js",
    "revision": "a14b3d796bfa412276f516e4e5c0e438"
  },
  {
    "url": "assets/js/11.117a3252.js",
    "revision": "6153237e64d4da5cb3cfb64c37dbc4bd"
  },
  {
    "url": "assets/js/12.f630d96f.js",
    "revision": "7e79039cb55765736212133d93ca428e"
  },
  {
    "url": "assets/js/13.e5a08207.js",
    "revision": "d934e6a77df3d9530ccd6e9074ee21dc"
  },
  {
    "url": "assets/js/14.95cd96e1.js",
    "revision": "57ef68f063545aa4ed3765048ff8105b"
  },
  {
    "url": "assets/js/15.3d194d65.js",
    "revision": "651fc5190c7dbe9ac609ac2a4894115f"
  },
  {
    "url": "assets/js/2.95391202.js",
    "revision": "0261a6bc917685de8d0db98c0b7d5b5b"
  },
  {
    "url": "assets/js/3.e147c853.js",
    "revision": "2f61c13ccae7c9a4174986f6fd62db82"
  },
  {
    "url": "assets/js/4.e7323231.js",
    "revision": "ea651dc0f76792ea62b5ca7cb32e1e5a"
  },
  {
    "url": "assets/js/5.54396494.js",
    "revision": "1bc9300ca889bee24342b7e334b3e781"
  },
  {
    "url": "assets/js/6.738b8620.js",
    "revision": "524c885203727fb464417b3dd95a4093"
  },
  {
    "url": "assets/js/7.31aa6e47.js",
    "revision": "b27de4cc315898d339f828351b218155"
  },
  {
    "url": "assets/js/8.b19ef837.js",
    "revision": "ecf3801cdbe98e7d921eb9b7e8dd29c4"
  },
  {
    "url": "assets/js/9.4dc40ef7.js",
    "revision": "f396788fb731ec67818ccc71682b54b5"
  },
  {
    "url": "assets/js/app.0e504f95.js",
    "revision": "e07643406e2dfd7b1ad29a3a8569a46f"
  },
  {
    "url": "banner-1544x500.png",
    "revision": "5e903c91f73eb5e48c1ddbce5756edb6"
  },
  {
    "url": "banner-772x250.png",
    "revision": "e1c141d365fca77bd803ff076929827d"
  },
  {
    "url": "block-editor.png",
    "revision": "815571a245f775c31a63d9a648b0787c"
  },
  {
    "url": "choose-language.png",
    "revision": "402e788bfb23b6241eb926c34d4e5843"
  },
  {
    "url": "connected-contents.png",
    "revision": "ada881102a811c54b24aa3e1e260d4e5"
  },
  {
    "url": "coverage/ContentImport/AttachmentPathFinder.php.html",
    "revision": "6dd9a494a3ecdfcc7c53ef1e717e9936"
  },
  {
    "url": "coverage/ContentImport/ContentImporter.php.html",
    "revision": "4084b733f7c713babb10b93434f7b137"
  },
  {
    "url": "coverage/ContentImport/dashboard.html",
    "revision": "097f4159b2e3cfd078f9b72be638d185"
  },
  {
    "url": "coverage/ContentImport/ImportCoordinates.php.html",
    "revision": "1aba5e143829ce7f9dd674ca10ae7bbd"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/dashboard.html",
    "revision": "f8f3170c5a7f652e40903faf18b87e68"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/index.html",
    "revision": "edbd4fedab301081300f514b90233b1c"
  },
  {
    "url": "coverage/ContentImport/Importers/Attachments/Linking.php.html",
    "revision": "842f41a5817e984cc722acb421e6bebd"
  },
  {
    "url": "coverage/ContentImport/Importers/AttachmentsImporters.php.html",
    "revision": "90562e01f3c4960bc6c7888197d2203c"
  },
  {
    "url": "coverage/ContentImport/Importers/BaseImporter.php.html",
    "revision": "acc96d2cc20dd160aa5a07c8a33e5208"
  },
  {
    "url": "coverage/ContentImport/Importers/dashboard.html",
    "revision": "54fccc697067830eb6bd3ff6777a46f7"
  },
  {
    "url": "coverage/ContentImport/Importers/Importer.php.html",
    "revision": "27ae1e3324a9052196c5810748c721fd"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersBaseFactory.php.html",
    "revision": "19f30004d4ba1ddad0d46ea25b8d1aed"
  },
  {
    "url": "coverage/ContentImport/Importers/ImportersFactory.php.html",
    "revision": "a6ba5c2c3a87988c038e185191b13b59"
  },
  {
    "url": "coverage/ContentImport/Importers/index.html",
    "revision": "90fb7599eda164f034554c06921c3ca0"
  },
  {
    "url": "coverage/ContentImport/Importers/Map.php.html",
    "revision": "ff193e44b55565e4badee593e70b8a73"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/dashboard.html",
    "revision": "f36c3fb9a9d1e331ff4ac5485e949f37"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/Duplicating.php.html",
    "revision": "68f004db8464fe7f0adb0b37f5c3b2a4"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFields/index.html",
    "revision": "91537496aa04daed7d935bd275d211a2"
  },
  {
    "url": "coverage/ContentImport/Importers/PostFieldsImporters.php.html",
    "revision": "5804666f4e34da46705a890239f3923b"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/dashboard.html",
    "revision": "4e639be655181cb4345d98b614c7ec86"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/Duplicating.php.html",
    "revision": "f04c78dee039d57ae4780586de5cb547"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMeta/index.html",
    "revision": "4de0056599c344956e55345b5b57f11a"
  },
  {
    "url": "coverage/ContentImport/Importers/PostMetaImporters.php.html",
    "revision": "8013a1f76542138e72e7eff8a1eed542"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/dashboard.html",
    "revision": "da10c90cac6435a80ccd641e58432ba8"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/index.html",
    "revision": "cbded4ce1288abfb84b31ed9fff10dad"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnail/Linking.php.html",
    "revision": "23621608e9c77e3231fa4d1723803c22"
  },
  {
    "url": "coverage/ContentImport/Importers/PostThumbnailImporters.php.html",
    "revision": "997a3f39bddbcb5fe9c0ba99db2f2e45"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/dashboard.html",
    "revision": "6a259a43a6f189af44c1351e19162d61"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/index.html",
    "revision": "2ac2452e2083b8bf4f0e28f537247b77"
  },
  {
    "url": "coverage/ContentImport/Importers/Terms/ShallowDuplicating.php.html",
    "revision": "9bd39ac4d75d835d625595c471c6cf2f"
  },
  {
    "url": "coverage/ContentImport/Importers/TermsImporters.php.html",
    "revision": "d94925cafa9ea4811b4f5205f0baeae1"
  },
  {
    "url": "coverage/ContentImport/ImportLogger.php.html",
    "revision": "a8b19e686e4716d9347c1ac291b175cd"
  },
  {
    "url": "coverage/ContentImport/index.html",
    "revision": "6e4faf169e5d63c0e921cad5dae397d8"
  },
  {
    "url": "coverage/ContentImport/LogWriters/AdminNoticeLogger.php.html",
    "revision": "745deb3e4f951444778667f82df6103b"
  },
  {
    "url": "coverage/ContentImport/LogWriters/dashboard.html",
    "revision": "e8f1d0724effe71ba4f09beb3a82cd7a"
  },
  {
    "url": "coverage/ContentImport/LogWriters/index.html",
    "revision": "1299d900ee7b81c15956f8efdb493d63"
  },
  {
    "url": "coverage/ContentImport/LogWriters/LogWriter.php.html",
    "revision": "6f332de12c9d15560ae86f0d5ab19f8f"
  },
  {
    "url": "coverage/ContentImport/MetaBox.php.html",
    "revision": "a90a0d2524be4d2ba6835e7e098cdb41"
  },
  {
    "url": "coverage/ContentImport/Relations.php.html",
    "revision": "f32addcb7ade6183d68f3f0a8f3bbbd4"
  },
  {
    "url": "coverage/ContentImport/Service.php.html",
    "revision": "f8d140c75835343c741c0869414fc562"
  },
  {
    "url": "coverage/dashboard.html",
    "revision": "ea0bd4faa54484e87a7f263a8ae410df"
  },
  {
    "url": "coverage/index.html",
    "revision": "c3a307e51c71960546fbdf869195470b"
  },
  {
    "url": "coverage/index.php.html",
    "revision": "75aa0ed43b9b0977cb2697284fb046e7"
  },
  {
    "url": "coverage/MslsAdmin.php.html",
    "revision": "28b54b877e0acc0da22c10834a52d96d"
  },
  {
    "url": "coverage/MslsAdminIcon.php.html",
    "revision": "d2c060c34149060b394a2189586073be"
  },
  {
    "url": "coverage/MslsAdminIconTaxonomy.php.html",
    "revision": "7fb28737d7bc928ac2114863c08daf97"
  },
  {
    "url": "coverage/MslsBlog.php.html",
    "revision": "4a592376e8123fafcba9fdde07f472d5"
  },
  {
    "url": "coverage/MslsBlogCollection.php.html",
    "revision": "1de3a60944c8a7f7ddaf44b556559bb9"
  },
  {
    "url": "coverage/MslsContentTypes.php.html",
    "revision": "6c9679bf0799477f9e44ec9cd569d8b8"
  },
  {
    "url": "coverage/MslsCustomColumn.php.html",
    "revision": "90fac6b23858c2349cf71e1f12e87a9f"
  },
  {
    "url": "coverage/MslsCustomColumnTaxonomy.php.html",
    "revision": "f2c0e0933b30799fc7dd3c8e0b1c838a"
  },
  {
    "url": "coverage/MslsCustomFilter.php.html",
    "revision": "ab29fc4b8cd5031c3b5195abb41e64d1"
  },
  {
    "url": "coverage/MslsGetSet.php.html",
    "revision": "397cd4a9a0a737c463923c6f8f7e8640"
  },
  {
    "url": "coverage/MslsJson.php.html",
    "revision": "c2159505309e8cb027457e9dcfde7034"
  },
  {
    "url": "coverage/MslsLanguageArray.php.html",
    "revision": "973e7ce86f67b3c6fce45f210253494e"
  },
  {
    "url": "coverage/MslsLink.php.html",
    "revision": "551119f72a0afaf3f7a82888410bfbdf"
  },
  {
    "url": "coverage/MslsLinkImageOnly.php.html",
    "revision": "55e5e6aec862361b834e817e16de5245"
  },
  {
    "url": "coverage/MslsLinkTextImage.php.html",
    "revision": "24e34fa5e946006f20f76aa938416dbb"
  },
  {
    "url": "coverage/MslsLinkTextOnly.php.html",
    "revision": "b41a7cb635aaf94d6a93e46dc1d025c6"
  },
  {
    "url": "coverage/MslsMain.php.html",
    "revision": "506437b013c8a3a60ff801c0be6d1082"
  },
  {
    "url": "coverage/MslsMetaBox.php.html",
    "revision": "b6ea62906a32ae2b91253f2c863cb37c"
  },
  {
    "url": "coverage/MslsOptions.php.html",
    "revision": "ae259682737a24aa023daba8dea56ca8"
  },
  {
    "url": "coverage/MslsOptionsPost.php.html",
    "revision": "3a3a1f147978da169804f473aeaded48"
  },
  {
    "url": "coverage/MslsOptionsQuery.php.html",
    "revision": "35ed1fb24e586f1a13c1729ed9b11a67"
  },
  {
    "url": "coverage/MslsOptionsQueryAuthor.php.html",
    "revision": "38896230708b9847b899b0dda6313a6b"
  },
  {
    "url": "coverage/MslsOptionsQueryDay.php.html",
    "revision": "dbfe8ed0b83b2b39f2a729fae15dfdc1"
  },
  {
    "url": "coverage/MslsOptionsQueryMonth.php.html",
    "revision": "07b09419ead2f78f745c70b9579ad6f1"
  },
  {
    "url": "coverage/MslsOptionsQueryPostType.php.html",
    "revision": "283c192fa07df8868c9f0a7806a4c25a"
  },
  {
    "url": "coverage/MslsOptionsQueryYear.php.html",
    "revision": "ee202ce5d775730f21e6fbc3c38bc49b"
  },
  {
    "url": "coverage/MslsOptionsTax.php.html",
    "revision": "a89a3747122b146b5eaffb3ac8add7a4"
  },
  {
    "url": "coverage/MslsOptionsTaxTerm.php.html",
    "revision": "e82a521a853e702c394e8618b321b5af"
  },
  {
    "url": "coverage/MslsOptionsTaxTermCategory.php.html",
    "revision": "51a8babfcff89a3f43ccb7905627b4db"
  },
  {
    "url": "coverage/MslsOutput.php.html",
    "revision": "6fa205290879c421a13a83bf0540c99c"
  },
  {
    "url": "coverage/MslsPlugin.php.html",
    "revision": "4cd7bac79ab8c5ed6ee06220e4ed7a46"
  },
  {
    "url": "coverage/MslsPostTag.php.html",
    "revision": "596de65ae56d7ab41943c5079d1b422a"
  },
  {
    "url": "coverage/MslsPostTagClassic.php.html",
    "revision": "a0567f8dc26ed41500ab8b8be89112c2"
  },
  {
    "url": "coverage/MslsPostType.php.html",
    "revision": "80d8d6652ae4845a3e4e45f07cc49b1f"
  },
  {
    "url": "coverage/MslsRegistry.php.html",
    "revision": "80f4eb80154953c75ba5ac4ed0350f51"
  },
  {
    "url": "coverage/MslsRegistryInstance.php.html",
    "revision": "b5c9c614ff35f65c8f6a492962224061"
  },
  {
    "url": "coverage/MslsSqlCacher.php.html",
    "revision": "40f3c1662c4fb6dbbcb409c1cea93ece"
  },
  {
    "url": "coverage/MslsTaxonomy.php.html",
    "revision": "050abae10d96eb31374511c20e97584e"
  },
  {
    "url": "coverage/MslsWidget.php.html",
    "revision": "3af728fd6a60ff02477f3bf6e5648be0"
  },
  {
    "url": "developer-docs/hook-reference.html",
    "revision": "1660da8ffdc8465336b0293390f77877"
  },
  {
    "url": "developer-docs/snippets-examples.html",
    "revision": "cfa5d9963b1c88b5076068bd00f503e8"
  },
  {
    "url": "editor-taxonomies.png",
    "revision": "4c4a8c03da97af0d94ee7617149d3ae9"
  },
  {
    "url": "editor.png",
    "revision": "e59f717fb975bca11c1844c1a40069ef"
  },
  {
    "url": "favicon.png",
    "revision": "04c1a0c2a730b9dd8fe8bc7be5febbe9"
  },
  {
    "url": "icon-128x128.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "icon-256x256.png",
    "revision": "395835eea4bdae80ff9ddc02738aa0d1"
  },
  {
    "url": "index.html",
    "revision": "44c6276814aa47d073365e242dcf4a06"
  },
  {
    "url": "logo.png",
    "revision": "561835a9159b574e131ab3919b4b0ad1"
  },
  {
    "url": "main-settings.png",
    "revision": "986b4bd2f60e38c7603f433191a4a73c"
  },
  {
    "url": "settings.png",
    "revision": "99b6619dec325076ae6766da500c1d23"
  },
  {
    "url": "user-docs/editing-association-contents.html",
    "revision": "caf79b1a6228e7f8ea7f6dea2584a0c8"
  },
  {
    "url": "user-docs/index.html",
    "revision": "c5a8204fd540bbc0116f02dcfdfcec22"
  },
  {
    "url": "user-docs/install-multisite.html",
    "revision": "1ae29f2cf037f122ee9cce3eb3460b2e"
  },
  {
    "url": "user-docs/integration-website.html",
    "revision": "4b36797c85785876f3d5f2024e3e028b"
  },
  {
    "url": "user-docs/plugin-configuration.html",
    "revision": "fa6e4d50c95299310690c798d45e8cf5"
  },
  {
    "url": "widget-output.png",
    "revision": "50a87a476855be43813cb5d999c227d6"
  },
  {
    "url": "widgets-admin.png",
    "revision": "b112ccda5116f43196e0456abc0a634a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
