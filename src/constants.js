export const BACKEND_HOST = "http://localhost:8080/";
export const REGISTRATION_URL = `${BACKEND_HOST}api/register`;
export const LOGIN_URL = `${BACKEND_HOST}api/auth`;

export const HEALTH_ISSUES = `${BACKEND_HOST}api/users/{id}/health-issues`;
export const CREATE_HEALTH_ISSUES = HEALTH_ISSUES;
export const VIEW_HEALTH_ISSUES = `${HEALTH_ISSUES}/{healthIssueId}`;
export const DOCTOR_HEALTH_ISSUES = `${BACKEND_HOST}api/doctors/health-issues`;


export const ANNOUNCEMENTS = `${BACKEND_HOST}api/announcements`;
export const CREATE_ANNOUNCEMENTS = `${BACKEND_HOST}api/doctors/{id}/announcements`;
export const VIEW_ANNOUNCEMENT = `${BACKEND_HOST}api/users/announcements/{id}`;


export const ADMIN_ANNOUNCEMENTS = `${BACKEND_HOST}api/admin/{id}/banner-announcements`;
export const BANNER_ANNOUNCEMENTS = `${BACKEND_HOST}api/banner-announcements`;