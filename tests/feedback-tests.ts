import { FeedbackPage } from '../pages/FeedbackPage';
import { MainPage } from '../pages/mainPage';

let mainPage: MainPage = new MainPage();
let feedbackPage: FeedbackPage;
const NAME: string = 'PEDRO';
const EMAIL: string = 'sample@random.com';
const SUBJECT: string = 'Subject example';
const DESCRIPTION: string = 'Description example';

fixture `Feedback form tests`
.page `http://zero.webappsecurity.com`
.beforeEach(async t => {
    // Setting test speed, value between 0.01 and 1
    await t.setTestSpeed(1);
});
test(`User can submit feedback via form`, async t => {
   
    // Navigate to the Request Feedback page
    feedbackPage = await mainPage.navigateToFeedbackPage();
    await t.expect(feedbackPage.isPageDisplayed()).ok('The Feedback page was not displayed');

    // Submit Feedback
    await t.expect(await feedbackPage.submitFeedback(NAME, EMAIL, SUBJECT, DESCRIPTION)).ok('The feedback was not submitted');
});