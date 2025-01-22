function deleteAfterString(str: string, target: string) {
    const index = str.indexOf(target);

    if (index !== -1) {
        // Include the target string in the deletion
        return str.substring(0, index + target.length);
    } else {
        // Target string not found, return the original string
        return str;
    }
}

export default deleteAfterString;
