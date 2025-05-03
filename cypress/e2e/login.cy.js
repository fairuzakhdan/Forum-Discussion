// Skenario e2e test login
// - harus menampilkan halaman login dengan benar
// - harus menampilkan peringatan ketika email pengguna kosong
// - harus menampilkan peringatan ketika kata sandi kosong
// - harus menampilkan peringatan ketika email pengguna dan kata sandi salah
// - harus menampilkan beranda ketika email pengguna dan kata sandi benar

describe('Login Spec',() => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button').contains(/^Login$/).should('be.visible')
  })

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  })
  
  it('should display alert when password is empty', () => {
    cy.get('input[name="email"]').type('emailtesting@gmail.com')
    
    cy.get('button').contains(/^Login$/).click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  })
  it('should display alert when username and password are wrong',() => {
    cy.get('input[name="email"]').type('emailtesting@gmail.com')
    cy.get('input[name="password"]').type('passwordwrong')
    cy.get('button').contains(/^Login$/).click();

    cy.on('window:alert',(str) => {
      expect(str).to.equal('email or password is wrong')
    })
  })

  it('should display homepage when username and password are correct',() => {
    cy.get('input[name="email"]').type('admin2@gmail.com')
    cy.get('input[name="password"]').type('admin2')
    cy.get('button').contains(/^Login$/).click();

    cy.get('nav').contains(/^Threads$/).should('be.visible')
    cy.get('nav').contains(/^Leaderboards$/).should('be.visible')
  })
})