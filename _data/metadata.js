let data = {
	username: "raymondcamden", // No leading @ here
	homeLabel: "raymondcamden",
	homeUrl: "https://www.raymondcamden.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;
//data.avatar = 'https://d33wubrfki0l68.cloudfront.net/b4c5aa9328a643b6e895262902bc51440b78341a/7f9c0/images/avatar2.jpg';

module.exports = data;