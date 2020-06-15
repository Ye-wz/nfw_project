/*
 Navicat Premium Data Transfer

 Source Server         : nfw
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : nav-pro

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 15/06/2020 18:14:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `goods_id` int(50) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `goods_price` float(10, 2) NOT NULL,
  `merchants_id` int(30) NOT NULL,
  `types_id` int(3) NOT NULL,
  `goods_imgs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Minimum` int(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`goods_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '小礼盒苹果19元/件（约8斤）', 19.00, 1, 1, '15777805849137.jpg', 1);
INSERT INTO `goods` VALUES (2, '阿克苏苹果58元/件(约16斤)', 58.00, 1, 1, '15753583212328.jpg', 1);
INSERT INTO `goods` VALUES (3, '大礼盒富士苹果50元／件（约15斤）', 50.00, 1, 1, '15675760338749.jpg', 1);
INSERT INTO `goods` VALUES (4, '阿克苏冰糖心苹果85元／件（约20斤）', 85.00, 1, 1, '15743903074333.jpg', 1);

-- ----------------------------
-- Table structure for merchants
-- ----------------------------
DROP TABLE IF EXISTS `merchants`;
CREATE TABLE `merchants`  (
  `merchants_id` int(30) NOT NULL AUTO_INCREMENT,
  `merchants_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `merchants_goods_num` int(50) NOT NULL,
  `merchants_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`merchants_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of merchants
-- ----------------------------
INSERT INTO `merchants` VALUES (1, '葛翠英水果批发', 1, '15480365431029.jpg');

-- ----------------------------
-- Table structure for types
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types`  (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `types_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lef` int(5) NOT NULL,
  `rgt` int(5) NOT NULL,
  `types_id` int(5) NOT NULL,
  `types_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES (1, '生鲜水果', 1, 10000, 0, '15434748594390.jpg');
INSERT INTO `types` VALUES (2, '核果仁果类', 1, 100, 0, '');
INSERT INTO `types` VALUES (3, '苹果', 1, 1, 1, '15428868377353.jpg');
INSERT INTO `types` VALUES (4, '梨', 2, 2, 2, '15428868407215.jpg');
INSERT INTO `types` VALUES (5, '山楂', 3, 3, 3, '15428869457527.jpg');
INSERT INTO `types` VALUES (6, '沙果', 4, 4, 4, '15428871339639.jpg');
INSERT INTO `types` VALUES (7, '蛇果', 5, 5, 5, '15435520263540.jpg');
INSERT INTO `types` VALUES (8, '李子', 6, 6, 6, '15435521898869.jpg');
INSERT INTO `types` VALUES (9, '热带水果', 101, 200, 0, '');
INSERT INTO `types` VALUES (10, '芒果', 101, 101, 101, '15468339116957.png');
INSERT INTO `types` VALUES (11, '荔枝', 102, 102, 102, '');
INSERT INTO `types` VALUES (12, '龙眼', 103, 103, 103, '');
INSERT INTO `types` VALUES (13, '新鲜蔬菜', 10001, 20000, 0, '15435045167367.jpg');
INSERT INTO `types` VALUES (14, '水生菜类', 10001, 10100, 0, '');
INSERT INTO `types` VALUES (15, '鲜枣', 7, 7, 7, '15444318606857.jpg');
INSERT INTO `types` VALUES (16, '杏', 8, 8, 8, '15444319759659.jpg');
INSERT INTO `types` VALUES (17, '蜜桃', 9, 9, 9, '15444323488188.jpg');
INSERT INTO `types` VALUES (18, '毛桃', 10, 10, 10, '15444326281152.jpg');
INSERT INTO `types` VALUES (19, '蟠桃', 11, 11, 11, '15444324355169.jpg');
INSERT INTO `types` VALUES (20, '黄桃', 12, 12, 12, '15444324593718.jpg');
INSERT INTO `types` VALUES (21, '油桃', 13, 13, 13, '15444324895870.jpg');
INSERT INTO `types` VALUES (22, '石榴', 14, 14, 14, '15444325753045.jpg');
INSERT INTO `types` VALUES (23, '番石榴', 15, 15, 15, '15444327662225.jpg');
INSERT INTO `types` VALUES (24, '人参果', 16, 16, 16, '15444328761011.jpg');
INSERT INTO `types` VALUES (25, '红毛丹', 17, 17, 17, '15444329451361.jpg');
INSERT INTO `types` VALUES (26, '雪莲果', 18, 18, 18, '15444334138894.jpg');
INSERT INTO `types` VALUES (27, '拐枣', 19, 19, 19, '15444335991303.jpg');
INSERT INTO `types` VALUES (28, '构桃', 20, 20, 20, '15444337571133.jpg');
INSERT INTO `types` VALUES (29, '樱桃', 21, 21, 21, '15444337980155.jpg');
INSERT INTO `types` VALUES (30, '西梅', 22, 22, 22, '15444338516106.jpg');
INSERT INTO `types` VALUES (31, '菠萝', 104, 104, 104, '');
INSERT INTO `types` VALUES (32, '火龙果', 105, 105, 105, '');
INSERT INTO `types` VALUES (33, '香蕉', 106, 106, 106, '');
INSERT INTO `types` VALUES (34, '榴莲', 107, 107, 107, '');
INSERT INTO `types` VALUES (35, '木瓜', 108, 108, 108, '');
INSERT INTO `types` VALUES (36, '莲雾', 109, 109, 109, '');
INSERT INTO `types` VALUES (37, '山竹', 110, 110, 110, '');
INSERT INTO `types` VALUES (38, '椰子', 111, 111, 111, '');
INSERT INTO `types` VALUES (39, '甘蔗', 112, 112, 112, '');
INSERT INTO `types` VALUES (40, '牛油果', 113, 113, 113, '');
INSERT INTO `types` VALUES (41, '杨桃', 114, 114, 114, '');
INSERT INTO `types` VALUES (42, '柠檬', 115, 115, 115, '');
INSERT INTO `types` VALUES (43, '余甘果', 116, 116, 116, '');
INSERT INTO `types` VALUES (44, '人心果', 117, 117, 117, '');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo`  (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tel` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES (1, 'Tom', '123', '0');
INSERT INTO `userinfo` VALUES (2, 'vJoHwiiMVF1Cdc', 'abc123', '178050809');
INSERT INTO `userinfo` VALUES (3, '6aCMF9UEagZ5Eh', '123', '123');
INSERT INTO `userinfo` VALUES (4, 'Vwtwy60k19UcfD', '1234567', '1234567891');
INSERT INTO `userinfo` VALUES (5, 'YsIQThA8s2YIEY', '1597548', '1870253');
INSERT INTO `userinfo` VALUES (6, 'HFrCwrpdmcQ7oT', '123456', '123456');

SET FOREIGN_KEY_CHECKS = 1;
