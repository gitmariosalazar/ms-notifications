import { CreateLogsNotificationsRequest } from '../../domain/schemas/dto/request/create.logs-notifications.request';
import { CreateNotificationRequest } from '../../domain/schemas/dto/request/create.notification.request';
import { UpdateNotificationRequest } from '../../domain/schemas/dto/request/update.notification.request';
import { LogsNotificationsResponse } from '../../domain/schemas/dto/response/logs-notifications.response';
import { NotificationResponse } from '../../domain/schemas/dto/response/notification.response';

export interface InterfaceNotificationUseCase {
  findAll(): Promise<NotificationResponse[]>;

  findById(idNotifications: string): Promise<NotificationResponse | null>;

  findByEmail(email: string): Promise<NotificationResponse[]>;

  create(
    notification: CreateNotificationRequest,
  ): Promise<NotificationResponse | null>;

  update(
    idNotifications: string,
    notification: UpdateNotificationRequest,
  ): Promise<NotificationResponse | null>;

  delete(idNotifications: string): Promise<boolean>;

  existsById(idNotifications: string): Promise<boolean>;
  sendAndCreateNotification(
    notification: CreateLogsNotificationsRequest,
  ): Promise<LogsNotificationsResponse | null>;
}
