class LinkHolder {
    title = ""
    links = []

    constructor(
        title = "Basic",
        links = [
            "https://mail.google.com/mail/u/0/#inbox",
            "https://calendar.google.com/calendar/u/0/r/week",
            "https://www.google.com/search?q=weather+precipitation"
        ]
    ) {
        this.title = title
        this.links = links
    }

    display() {
        const section = document.createElement('div');
        section.className = 'link-section';
        const header = document.createElement('h3');
        header.textContent = `Open ${this.title}'s links:`;
        header.onclick = function () {
            openLinks(this.links);
        };
        section.appendChild(header);
        this.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.target = '_blank';
            anchor.textContent = new URL(link).hostname;
            section.appendChild(anchor);
        });
        return section
    }
}

class SectionHolder {
    title = ""
    linkHolders = []

    constructor(title = "Main", linkHolders = []) {
        this.title = title
        this.linkHolders = linkHolders
    }

    check() {
        if (!this.linkHolders) {
            this.add()
        }
    }

    add() {
        this.linkHolders.push(
            new LinkHolder(
                "Basic",
                [
                    "https://mail.google.com/mail/u/0/#inbox",
                    "https://calendar.google.com/calendar/u/0/r/week",
                    "https://www.google.com/search?q=weather+precipitation"
                ]
            )
        )
    }

    display() {
        this.check()
        const section = document.createElement('div');
        section.className = 'link-section';
        const header = document.createElement('h2');
        header.textContent = `${this.title}`;
        section.appendChild(header);
        this.linkHolders.forEach(linkHolder => {
            section.appendChild(linkHolder.display());
        });
        return section
    }

    update(newContent) {
        let unParsed = JSON.parse(newContent)
        const sectionHolderList = [];
        for (const unparsedElement of unParsed["linkHolders"]) {
            const linkHolderInstance = Object.assign(new LinkHolder(), unparsedElement);
            sectionHolderList.push(linkHolderInstance);
        }
        this.title = unParsed["title"]
        this.linkHolders = sectionHolderList
        this.check()
    }
}

function openLinks(link) {
    window.open(link, '_blank');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied!");
    }).catch((err) => {
        console.error('Oops, unable to copy', err);
        feedbackMessage = 'Error copying link: ' + err;
    })
}

window.onload = function () {
    const codeDisplay = document.getElementById('codeDisplay');
    let sectionHolder = new SectionHolder("Main", []);
    const container = document.getElementById('linkContainer');
    if (new URL(window.location.href).searchParams.has("content")) {
        sectionHolder.update(new URL(window.location.href).searchParams.get("content"))
    }
    container.replaceChildren(sectionHolder.display())
    codeDisplay.textContent = JSON.stringify(sectionHolder, null, "  ");
    document.getElementById('Update').addEventListener('click', function () {
        sectionHolder.update(codeDisplay.textContent)
        container.replaceChildren(sectionHolder.display())
        codeDisplay.textContent = JSON.stringify(sectionHolder, null, "  ")
        const url = new URL(window.location.href)
        url.searchParams.set("content", JSON.stringify(sectionHolder))
        window.location.href = url.href
    });
    document.getElementById('New Section').addEventListener('click', function () {
        sectionHolder.add()
        container.replaceChildren(sectionHolder.display())
        codeDisplay.textContent = JSON.stringify(sectionHolder, null, "  ")
        const url = new URL(window.location.href)
        url.searchParams.set("content", JSON.stringify(sectionHolder))
        window.location.href = url.href
    });
    document.getElementById('Share').addEventListener('click', function () {
        copyToClipboard(JSON.stringify(sectionHolder))
    });
    document.getElementById('Share URL').addEventListener('click', function () {
        const url = new URL(window.location.href)
        url.searchParams.set("content", JSON.stringify(sectionHolder))
        window.location.href = url.href
        copyToClipboard(url.href);
    });
};
