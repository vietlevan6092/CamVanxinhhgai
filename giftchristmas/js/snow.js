function createSnowflake() {
    const snowflake = document.createElement('li');
    snowflake.textContent = '❄️';
    document.querySelector('.snowflakes').appendChild(snowflake);

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 200);
