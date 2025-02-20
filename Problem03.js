function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return 'Invalid';
    }

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        let lowerCaseVote = vote.toLowerCase();

        if (lowerCaseVote === 'mango') {
            mangoCount++;
        }
    
        else if (lowerCaseVote === 'banana') {
            bananaCount++;
        }
    }

    if (mangoCount > bananaCount) {
        return 'Mango';
    }

    else if (bananaCount > mangoCount) {
        return 'Banana'
    }

    else {
        return 'Draw';
    }
}