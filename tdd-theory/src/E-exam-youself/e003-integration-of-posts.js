/**
 * #3 Task.
 * Given a service of Posts, check if they are wrapped in html format correctly.
 * Try use TDD - make the test file also for your own.
 * Prepare some plans for test first, then: red - green - refactor
 *
 * Post should looks like:
 *
 * <h4> {title} ({userId}) </h4>
 * <p>
 *    {body}
 * </p>
 *
 * It is just a string (not DOM Node or JSX!)
 *
 * Post are given by e003-post-service
 * you should use it to download posts, and make a proper wrapper
 *
 * Requirements:
 * - post should be downloaded from: https://jsonplaceholder.typicode.com/posts using a separate service (e003-post-service).
 * - each post shows title userId and body
 * - each post have html string form with header and paragraph
 *
 * */
