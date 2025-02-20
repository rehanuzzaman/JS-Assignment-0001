function validEmail(email) {
    if (typeof email !== "string") {
        return 'invalid';
    }

    if (/^[\.\-\_\+\@]/.test(email)) {
        return false;
    }

    if (/\s/.test(email)) {
        return false;
    }

    if (!email.includes("@")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
}