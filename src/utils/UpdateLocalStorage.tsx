type Interaction = {
    userQuery: string;
    llmResponse: string;
}

const addInteractionToLocalStorage = (newInteraction: Interaction) => {
    const interactionsString = localStorage.getItem('interactions');

    const interactions: Interaction[] = interactionsString ? JSON.parse(interactionsString) : [];

    interactions.push(newInteraction);

    localStorage.setItem('interactions', JSON.stringify(interactions));

    window.dispatchEvent(new CustomEvent('localStorageInteractionsUpdated'));
};

const retrieveAllInteractionsFromLocalStorage = () => {
    const interactionsString = localStorage.getItem('interactions');
    const interactions: Interaction[] = interactionsString ? JSON.parse(interactionsString): []

    return interactions ? interactions : undefined
}

const clearHistory = () => {
    localStorage.setItem('interactions', JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('localStorageInteractionsUpdated')); 
}
export {clearHistory, addInteractionToLocalStorage, retrieveAllInteractionsFromLocalStorage}

