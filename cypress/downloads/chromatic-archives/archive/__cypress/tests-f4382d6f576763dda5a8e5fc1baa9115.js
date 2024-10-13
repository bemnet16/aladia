/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./cypress/e2e/test.spec.cy.js ***!
  \*************************************/


describe("Check if server is live", () => {
  it("server is live", () => {
    cy.visit("http://localhost:3000");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("already existing user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("place@holder.com");
    cy.get("#email-field").type("place@holder.com");
    cy.get(".gap-4 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("register new user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("new");
    cy.get("#email-field").type("new@gmail.com");
    cy.get(".gap-4 > .gradient").click();
    cy.get(".justify-between > .relative > .flex").click();
    cy.get("#terms-checkbox").check();
    cy.get("#name").clear("A");
    cy.get("#name").type("Bemnet Adugnaw");
    cy.get("#surname").click();
    cy.get("#name").clear("Bemnet Ad");
    cy.get("#name").type("Bemnet");
    cy.get("#surname").clear("Adugnaw");
    cy.get("#surname").type("Adugnaw");
    cy.get(":nth-child(6) > .group > #password").clear("s");
    cy.get(":nth-child(6) > .group > #password").type("string");
    cy.get(":nth-child(7) > .group > #password").clear("s");
    cy.get(":nth-child(7) > .group > #password").type("string");
    cy.get(".py-1\\.5 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zcGVjLmN5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLFFBQVEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNO0VBQ3hDQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN6QkMsRUFBRSxDQUFDQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7RUFDbkMsQ0FBQyxDQUFDOztFQUVGO0VBQ0FGLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxZQUFZO0lBQzNEO0lBQ0FDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDO0lBQzFCRCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLGtCQUFrQixDQUFDO0lBQ2hESCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQy9DSixFQUFFLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUNwQztFQUNGLENBQUMsQ0FBQzs7RUFFRjtFQUNBTixFQUFFLENBQUMsd0NBQXdDLEVBQUUsWUFBWTtJQUN2RDtJQUNBQyxFQUFFLENBQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQkQsRUFBRSxDQUFDRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUNDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDbkNILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzVDSixFQUFFLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUNwQ0wsRUFBRSxDQUFDRSxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDdERMLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0lBQ2pDTixFQUFFLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxQkgsRUFBRSxDQUFDRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0Q0osRUFBRSxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDO0lBQzFCTCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNsQ0gsRUFBRSxDQUFDRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUNFLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUJKLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ25DSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsQ0osRUFBRSxDQUFDRSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2REgsRUFBRSxDQUFDRSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzREosRUFBRSxDQUFDRSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2REgsRUFBRSxDQUFDRSxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzREosRUFBRSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDdkM7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL251eHQtYXBwLy4vY3lwcmVzcy9lMmUvdGVzdC5zcGVjLmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRlc2NyaWJlKFwiQ2hlY2sgaWYgc2VydmVyIGlzIGxpdmVcIiwgKCkgPT4ge1xuICBpdChcInNlcnZlciBpcyBsaXZlXCIsICgpID0+IHtcbiAgICBjeS52aXNpdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiKTtcbiAgfSk7XG5cbiAgLyogPT09PSBUZXN0IENyZWF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4gIGl0KFwiYWxyZWFkeSBleGlzdGluZyB1c2VyIChpbiBtZW1vcnkgZGF0YWJhc2UpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgICBjeS52aXNpdChcImxvY2FsaG9zdDozMDAwXCIpO1xuICAgIGN5LmdldChcIiNlbWFpbC1maWVsZFwiKS5jbGVhcihcInBsYWNlQGhvbGRlci5jb21cIik7XG4gICAgY3kuZ2V0KFwiI2VtYWlsLWZpZWxkXCIpLnR5cGUoXCJwbGFjZUBob2xkZXIuY29tXCIpO1xuICAgIGN5LmdldChcIi5nYXAtNCA+IC5ncmFkaWVudFwiKS5jbGljaygpO1xuICAgIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgfSk7XG5cbiAgLyogPT09PSBUZXN0IENyZWF0ZWQgd2l0aCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG4gIGl0KFwicmVnaXN0ZXIgbmV3IHVzZXIgKGluIG1lbW9yeSBkYXRhYmFzZSlcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8qID09PT0gR2VuZXJhdGVkIHdpdGggQ3lwcmVzcyBTdHVkaW8gPT09PSAqL1xuICAgIGN5LnZpc2l0KFwibG9jYWxob3N0OjMwMDBcIik7XG4gICAgY3kuZ2V0KFwiI2VtYWlsLWZpZWxkXCIpLmNsZWFyKFwibmV3XCIpO1xuICAgIGN5LmdldChcIiNlbWFpbC1maWVsZFwiKS50eXBlKFwibmV3QGdtYWlsLmNvbVwiKTtcbiAgICBjeS5nZXQoXCIuZ2FwLTQgPiAuZ3JhZGllbnRcIikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCIuanVzdGlmeS1iZXR3ZWVuID4gLnJlbGF0aXZlID4gLmZsZXhcIikuY2xpY2soKTtcbiAgICBjeS5nZXQoXCIjdGVybXMtY2hlY2tib3hcIikuY2hlY2soKTtcbiAgICBjeS5nZXQoXCIjbmFtZVwiKS5jbGVhcihcIkFcIik7XG4gICAgY3kuZ2V0KFwiI25hbWVcIikudHlwZShcIkJlbW5ldCBBZHVnbmF3XCIpO1xuICAgIGN5LmdldChcIiNzdXJuYW1lXCIpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KFwiI25hbWVcIikuY2xlYXIoXCJCZW1uZXQgQWRcIik7XG4gICAgY3kuZ2V0KFwiI25hbWVcIikudHlwZShcIkJlbW5ldFwiKTtcbiAgICBjeS5nZXQoXCIjc3VybmFtZVwiKS5jbGVhcihcIkFkdWduYXdcIik7XG4gICAgY3kuZ2V0KFwiI3N1cm5hbWVcIikudHlwZShcIkFkdWduYXdcIik7XG4gICAgY3kuZ2V0KFwiOm50aC1jaGlsZCg2KSA+IC5ncm91cCA+ICNwYXNzd29yZFwiKS5jbGVhcihcInNcIik7XG4gICAgY3kuZ2V0KFwiOm50aC1jaGlsZCg2KSA+IC5ncm91cCA+ICNwYXNzd29yZFwiKS50eXBlKFwic3RyaW5nXCIpO1xuICAgIGN5LmdldChcIjpudGgtY2hpbGQoNykgPiAuZ3JvdXAgPiAjcGFzc3dvcmRcIikuY2xlYXIoXCJzXCIpO1xuICAgIGN5LmdldChcIjpudGgtY2hpbGQoNykgPiAuZ3JvdXAgPiAjcGFzc3dvcmRcIikudHlwZShcInN0cmluZ1wiKTtcbiAgICBjeS5nZXQoXCIucHktMVxcXFwuNSA+IC5ncmFkaWVudFwiKS5jbGljaygpO1xuICAgIC8qID09PT0gRW5kIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJ2aXNpdCIsImdldCIsImNsZWFyIiwidHlwZSIsImNsaWNrIiwiY2hlY2siXSwic291cmNlUm9vdCI6IiJ9