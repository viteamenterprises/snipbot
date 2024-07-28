const { Builder, By, Key, until } = require('selenium-webdriver');

// Função para confirmar um e-mail usando Selenium
exports.confirmEmail = async (email) => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Acesse o serviço de e-mail
    await driver.get('https://www.emailnator.com/');
    
    // Insira o e-mail e obtenha o link de confirmação
    await driver.findElement(By.name('email')).sendKeys(email, Key.RETURN);
    await driver.wait(until.elementLocated(By.css('a.confirmation-link')), 10000);
    
    // Obtenha o link de confirmação
    const confirmationLink = await driver.findElement(By.css('a.confirmation-link')).getAttribute('href');
    await driver.get(confirmationLink);
    
    return true;
  } catch (error) {
    throw new Error('Erro ao confirmar e-mail');
  } finally {
    await driver.quit();
  }
};
